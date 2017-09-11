const config = require('config')['Amazon'];
const amazon = require('amazon-product-api');
const models = require('../../db/models');

global.Promise = require('bluebird');

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

const normalizeAmazonData = function(amazonData) {
  var item = {};

  amazonData = flattenXml(amazonData);

  if (amazonData.ItemAttributes) {
    var attributes = amazonData.ItemAttributes;

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

  if (amazonData.DetailPageURL) {
    item.url = amazonData.DetailPageURL;
  } else {
    console.log('No url');
  }

  if (amazonData.LargeImage) {
    item.imageURL = amazonData.LargeImage.URL;
  } else {
    console.log('No image url');
  }

  if (amazonData.OfferSummary) {
    var lowestNewPrice = parseInt(amazonData.OfferSummary.LowestNewPrice.Amount);
    if (lowestNewPrice < item.price || !item.price) {
      item.price = lowestNewPrice;
    }
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

      return product;
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
    image_url: item.imageURL,
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
    query = {
      keywords: query,
      responseGroup: 'ItemAttributes,Images,Offers',
    };
  }

  return client.itemSearch(query)
    .map(normalizeAmazonData)
    .filter(filterItems)
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
    responseGroup: 'ItemAttributes,Images,Offers',
  };

  return client.itemLookup(query)
    .then(normalizeAmazonData);
};
