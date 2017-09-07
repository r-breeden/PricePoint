const db = require('../');

const Price = db.Model.extend({
  tableName: 'prices',
  hasTimestamps: true,
});

module.exports = db.model('Price', Price);
