const Promise = require('bluebird');
const models = require('../../db/models');

const amazon = require('../middleware/amazon');

const updateLeastRecent = function() {
  models.Product.forge().query(q => q.limit(5).orderBy('last_updated'))
    .fetchAll()
    .then(products => products.serialize())
    .map(item => amazon.lookup(item))
    .then(results => module.exports.storeFromVendor(results, 'Amazon'))
    .catch(err => console.log(err.message));
};

const presentProduct = function(product) {
  product = product.serialize({omitPivot: true});

  var item = {
    name: product.name,
    description: product.description,
    imageURL: product.image_url,
    upc: product.upc,
  };

  item.vendors = {};

  for (let i = 0; i < product.vendors.length; i++) {
    let vendor = product.vendors[i];

    item.vendors[vendor.name] = {
      url: vendor.url,
      prices: [],
    };
  }

  for (let i = 0; i < product.prices.length; i++) {
    let price = product.prices[i];

    item.vendors[price.name].prices.push({
      price: price.price,
      timestamp: price.created_at
    });
  }

  return item;
};

module.exports.storeFromVendor = function(items, vendorName) {
  return models.Vendor.findOrCreate(vendorName)
    .then(({id: vendorId}) => {
      return Promise.map(items, item => storeItem(item, vendorId));
    })
    .catch(err => console.log(err.message));
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
      return Promise.all([
        product.save('last_updated', new Date()),
        models.Price.forge({
          product_id: product.get('id'),
          vendor_id: vendorId,
          price: item.price,
        }).save()
      ]);
    })
    .spread(product => {
      return product.fetch({
        withRelated: [
          { 'prices': q => q.columns([
            'price',
            'created_at',
            'vendors.name'
          ]).orderBy('created_at', 'DESC')},
          { 'vendors': q => q.columns([
            'product_urls.url',
            'vendors.name'
          ])}
        ]
      });
    })
    .then(presentProduct);
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
        url: item.itemURL,
      }).save();

      return product;
    });
};

