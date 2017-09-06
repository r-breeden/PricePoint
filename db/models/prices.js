const db = require('../');

const Price = db.Model.extend({
  tableName: 'prices',
  hasTimestamp: true,
});

module.exports = db.model('Price', Price);
