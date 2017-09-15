const Promise = require('bluebird');
const models = require('../../db/models');

const amazon = require('../middleware/amazon');

const updateLeastRecent = function() {
  models.Product.forge().query(q => q.limit(5).orderBy('last_updated'))
    .fetchAll()
    .then(products => products.serialize())
    .then(products => {
      return amazon.lookup(products.map(product => product.upc).join(','));
    })
    .then(results => storeFromVendor(results, 'Amazon'))
    .catch(err => {
      console.log(err.message);
    });
};

const storeFromVendor = function(items, vendorName) {
  return models.Vendor.findOrCreate(vendorName)
    .then(({id: vendorId}) => {
      return Promise.map(items, item => storeItem(item, vendorId));
    })
    .catch(err => {
      console.log(err.message);
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
      return models.Price.forge({
        product_id: product.get('id'),
        vendor_id: vendorId,
        price: item.price,
      }).save()
        .then(() => product.save('last_updated', new Date()));
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

module.exports = {
  updateLeastRecent,
  storeFromVendor,
};
