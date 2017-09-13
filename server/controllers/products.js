const models = require('../../db/models');

module.exports.storeFromVendor = function(items, vendorName) {
  return models.Vendor.findOrCreate(vendorName)
    .then(({id: vendorId}) => {
      return Promise.all(items.map(item => storeItem(item, vendorId)));
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
      models.Price.forge({
        product_id: product.get('id'),
        vendor_id: vendorId,
        price: item.price,
      }).save();

      return product;
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
        url: item.itemURL,
      }).save();

      return product;
    });
};

