const config = require('config')['Amazon'];
const amazon = require('amazon-product-api');
const Promise = require('bluebird');

const client = Promise.promisifyAll(amazon.createClient(config));

const normalize = item => {
  return {
    title: item.ItemAttibutes[0].Title[0],
    itemURL: item.DetailPageURL[0],
    imageURL: item.LargeImage[0].URL[0],
    description: item.ItemAttributes[0].Feature[0],
    price: item.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0],
    upc: item.ItemAttributes[0].UPC[0],
    brand: item.ItemAttributes[0].Brand[0],
  };
};

module.exports.search = function(query) {
  return client.itemSearchAsync({keywords: query})
    .map(normalize)
    .tap(results => {
    })
    .tapCatch(err => {
      console.log(err);
    });
};

module.exports.lookup = function(item) {
  return client.itemLookupAsync()
    .catch(err => {
      console.log(err);
    });
};
