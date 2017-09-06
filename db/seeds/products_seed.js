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
    .then(vendor => {
      vendorId = vendor.get('id');

      return models.Product.forge({
        name: 'Test Product',
        upc: 'abc123',
        description: 'Test Product Please Ignore',
      }).save();
    })
    .then(product => {
      productId = product.get('id');

      return models.ProductUrl.forge({
        vendor_id: vendorId,
        product_id: productId,
        url: 'https://www.amazon.com/foo'
      }).save();
    })
    .then(() => {
      return models.Price.forge({
        vendor_id: vendorId,
        product_id: productId,
        price: 9999.99,
      }).save();
    })
    .then(() => {
      return models.Price.forge({
        vendor_id: vendorId,
        product_id: productId,
        price: 1234.56,
        created_at: Date.now() - 2000
      }).save();
    })
    .catch(err => {
      console.log(err);
    });
};
