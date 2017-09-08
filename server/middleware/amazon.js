const config = require('config')['Amazon'];
const amazon = require('amazon-product-api');
const Promise = require('bluebird');

const client = Promise.promisifyAll(amazon.createClient(config));

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

const normalize = amazonItem => {
  var item = {};

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
    console.log('No price');
  }

  return item;
};

module.exports.search = function(query) {
  if (typeof query === 'string') {
    query = {keywords: query};
  }

  return client.itemSearchAsync(query)
    .map(flattenXml)
    .map(normalize)
    .tapCatch(err => {
      console.log(err);
    });
};

module.exports.lookup = function(item) {
  return client.itemLookupAsync()
    .map(flattenXml)
    .map(normalize)
    .tapCatch(err => {
      console.log(err);
    });
};
