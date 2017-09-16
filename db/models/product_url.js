const db = require('../');

const ProductUrl = db.Model.extend({
  tableName: 'product_urls',

  product: function() {
    return this.belongsTo('Product');
  },

  vendor: function() {
    return this.belongsTo('Vendor');
  },
});

module.exports = db.model('ProductUrl', ProductUrl);
