const db = require('../');

const ProductUrl = db.Model.extend({
  tableName: 'product_urls',
});

module.exports = db.model('ProductUrl', ProductUrl);
