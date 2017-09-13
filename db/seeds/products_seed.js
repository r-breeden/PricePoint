const models = require('../models');

exports.seed = function(knex, Promise) {
  var vendorId, productId;

  return models.Vendor.where({name: 'Amazon'}).fetch()
    .then(vendor => {
      if (vendor) {
        throw vendor;
      }

      return Promise.all([
        models.Vendor.forge({
          name: 'Amazon',
          url: 'https://www.amazon.com/'
        }).save(),
        models.Product.forge({
          name: 'Test Product',
          upc: 'abc123',
          description: 'Test Product Please Ignore',
        }).save(),
      ]);
    })
    .spread((vendor, product) => {
      models.ProductUrl.forge({
        vendor_id: vendor.get('id'),
        product_id: product.get('id'),
        url: 'https://www.amazon.com/foo'
      }).save();

      models.Price.forge({
        vendor_id: vendor.get('id'),
        product_id: product.get('id'),
        price: 999999,
      }).save().delay(1)
        .then(() => models.Price.forge({
          vendor_id: vendor.get('id'),
          product_id: product.get('id'),
          price: 123456,
        }).save());
    })
    .catch(err => {
      console.log(err);
    });
};
