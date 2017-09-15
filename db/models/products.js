const db = require('../');

const Product = db.Model.extend({
  tableName: 'products',

  followers: function() {
    return this.belongsToMany('Profile', 'followed_products');
  },

  prices: function() {
    return this.hasMany('Price');
  },

  product_urls: function() {
    return this.hasMany('ProductUrl');
  },

  vendors: function() {
    return this.belongsToMany('Vendor')
      .through('ProductUrl');
  },
});

module.exports = db.model('Product', Product);
