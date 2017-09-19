const Promise = require('bluebird');
const models = require('../../db/models');

module.exports.addCategory = (user, table) => {
  return models.Categories.forge({
    name: table,
    profile_id: user,
  }).save();
};

module.exports.addItem = (user, table, upc) => {
  return models.Product.where({
    upc: upc
  }).fetch()
    .then(product => {
      productId = product.serialize().id;
      console.log(productId);
      return models.Categories.where({
        profile_id: user,
        name: table
      }).fetch()
        .then(category => {
          categoryId = category.serialize().id;
          category.products().attach(product);
        });
    });
};

module.exports.retrieveCategory = (user) => {
  return models.Categories.where({
    profile_id: user
  }).fetch()
    .then(categories => {
      return categories.serialize();
    });
};
