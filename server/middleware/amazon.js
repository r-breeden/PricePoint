const config = require('config')['Amazon'];
const amazon = require('amazon-product-api');

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
      item.title = attributes.Title;
    } else {
      console.log('No title');
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
      item.price = (attributes.ListPrice.FormattedPrice);
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
    item.imageURL = amazonItem.LargeImage.URL;
  } else {
    console.log('No image url');
  }

  if (amazonItem.OfferSummary) {
    var lowestNewPrice = parseInt(amazonItem.OfferSummary.LowestNewPrice.Amount);
    if (lowestNewPrice < item.price || !item.price) {
      item.price = lowestNewPrice;
    }
  } else {
    console.log('No lowest price');
  }

  return item;
};

var filterItems = item => !!item.upc && !!item.price;

module.exports.search = function(query) {
  if (typeof query === 'string') {
    query = {
      keywords: query,
      responseGroup: 'ItemAttributes,Images,Offers'
    };
  }

  return client.itemSearch(query)
    .then(results => results.map(normalizeItems).filter(filterItems));
};

module.exports.lookup = function(item) {
  var query = {
    idType: 'UPC',
    itemId: item.upc,
  };

  return client.itemLookup(query)
    .then(result => normalizeItems(result));
};
