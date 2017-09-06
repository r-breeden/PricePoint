const models = require('../models');

exports.seed = function(knex, Promise) {
  var vendorId, productId;

  return models.Vendor.where({name: 'Amazon'}).fetch()
    .then(vendor => {
      if (vendor) {
        throw vendor;
      }

      return models.Vendor.forge({
        name: 'Amazon',
        url: 'https://www.amazon.com/'
      }).save();
    })
    .error(err => {
      console.log(err);
    })
    .then(vendor => {
      vendorId = vendor.get('id');

      return models.Product.forge({
        name: 'Test Product',
        upc: 'abc123',
        description: 'Test Product Please Ignore',
      }).save();
    })
    .error(err => {
      console.log(err);
    })
    .then(product => {
      productId = product.get('id');

      return models.ProductUrl.forge({
        vendor_id: vendorId,
        product_id: productId,
        url: 'https://www.amazon.com/foo'
      }).save();
    })
    .error(err => {
      console.log(err);
    })
    .then(productUrl => {
      console.log(productUrl.toJSON());

      return models.Price.forge({
        vendor_id: vendorId,
        product_id: productId,
        price: 9999.99
      }).save();
    })
    .error(err => {
      console.log(err);
    })
    .then(price => {
      console.log(price.toJSON());
    })
    .catch(err => {
      console.log(err);
    });
};
