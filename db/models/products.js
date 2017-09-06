const db = require('../');

const Product = db.Model.extend({
  tableName: 'products',

  followers: function() {
    return this.belongsToMany('Profile', 'followed_products');
  },

  prices: function() {
    return this.belongsToMany('Vendor')
      .through('Price');
  },

  vendors: function() {
    return this.belongsToMany('Vendor')
      .through('ProductUrl');
  },
});

module.exports = db.model('Product', Product);
