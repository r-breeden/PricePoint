const db = require('../');

const Product_url = db.Model.extend({
  tableName: 'product_url',
  products: function() {
    return this.belongsTo('Product');
  },
  vendors: function() {
    return this.belongsTo('Vendor');
  }
});

module.exports = db.model('Product_url', Product_url);
