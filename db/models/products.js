const db = require('../');

const Product = db.Model.extend({
  tableName: 'products',
  vendors: function() {
    return this.belongsToMany('Vendor');
  },
  product_url: function() {
    return this.hasMany('Product_url');
  },
  users: function() {
    return this.belongsToMany('Profile');
  }
});

module.exports = db.model('Product', Product);
