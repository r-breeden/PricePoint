const db = require('../');

const Vendor = db.Model.extend({
  tableName: 'vendors',
  products: function() {
    return this.belongsToMany('Product');
  },
  prices: function() {
    return this.hasMany('Price');
  }
});

module.exports = db.model('Vendor', Vendor);
