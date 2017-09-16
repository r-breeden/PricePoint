const db = require('../');

const Price = db.Model.extend({
  tableName: 'prices',
  hasTimestamps: true,

  product: function() {
    return this.belongsTo('Product');
  },

  vendor: function() {
    return this.belongsTo('Vendor');
  },
});

module.exports = db.model('Price', Price);
