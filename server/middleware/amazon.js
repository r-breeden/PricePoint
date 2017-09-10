const config = require('config')['Amazon'];
const amazon = require('amazon-product-api');
const models = require('../../db/models');

const client = amazon.createClient(config);

var flattenXml = function(object) {
  if (Array.isArray(object)) {
    if (object.length === 1) {
      object = flattenXml(object[0]);
    } else {
      object = object.map(flattenXml);
    }
  } else if (typeof object === 'object') {
    for (let k in object) {
      object[k] = flattenXml(object[k]);
    }
  }

  return object;
};

const normalizeItems = function(amazonItem) {
  var item = {};

  amazonItem = flattenXml(amazonItem);

  if (amazonItem.ItemAttributes) {
    var attributes = amazonItem.ItemAttributes;

    if (attributes.Title) {
      item.name = attributes.Title;
    } else {
      console.log('No name');
    }

    if (attributes.Feature) {
      if (Array.isArray(attributes.Feature)) {
        item.description = attributes.Feature.join('\n');
      } else {
        item.description = attributes.Feature;
      }
    } else {
      console.log('No description');
    }

    if (attributes.UPC) {
      item.upc = attributes.UPC;
    } else {
      console.log('No upc');
    }

    if (attributes.Brand) {
      item.brand = attributes.Brand;
    } else {
      console.log('No brand');
    }

    if (attributes.ListPrice) {
      item.price = parseInt(attributes.ListPrice.Amount);
    } else {
      console.log('no list price');
    }
  } else {
    console.log('No attributes');
  }

  if (amazonItem.DetailPageURL) {
    item.url = amazonItem.DetailPageURL;
  } else {
    console.log('No url');
  }

  if (amazonItem.LargeImage) {
    item.imageUrl = amazonItem.LargeImage.URL;
  } else {
    console.log('No image url');
  }

  if (amazonItem.OfferSummary) {
    item.price = amazonItem.OfferSummary.LowestNewPrice.Amount;
  } else {
    console.log('No lowest price');
  }

  return item;
};

var filterItems = item => !!item.upc && !!item.price;

var storeItems = function(items, vendorName) {
  return models.Vendor.findOrCreate(vendorName)
    .then(({id: vendorId}) => {
      return Promise.all(items.map(item => storeItem(item, vendorId)));
    });
};

var storeItem = function(item, vendorId) {
  return models.Product.where({ upc: item.upc }).fetch()
    .then(product => {
      if (product) {
        return product;
      } else {
        return createProduct(item, vendorId);
      }
    })
    .then(product => {
      models.Price.forge({
        product_id: product.get('id'),
        vendor_id: vendorId,
        price: item.price,
      }).save();
    })
    .catch(err => {
      console.log(err);
    });
};

var createProduct = function(item, vendorId) {
  return models.Product.forge({
    name: item.name,
    upc: item.upc,
    description: item.description,
  }).save()
    .then(product => {
      models.ProductUrl.forge({
        product_id: product.get('id'),
        vendor_id: vendorId,
        url: item.url,
      }).save();

      return product;
    });
};

module.exports.search = function(query) {
  if (typeof query === 'string') {
    query = {keywords: query};
  }

  return client.itemSearch(query)
    .then(items => items.map(normalizeItems).filter(filterItems))
    .then(items => {
      // Do this async for now
      storeItems(items, 'Amazon');

      return items;
    });
};

module.exports.lookup = function(item) {
  var query = {
    idType: 'UPC',
    itemId: item.upc,
  };

  return client.itemLookup(query)
    .then(item => normalizeItems(item));
};
