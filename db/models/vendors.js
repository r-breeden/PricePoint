const db = require('../');

const Vendor = db.Model.extend({
  tableName: 'vendors',

});

module.exports = db.model('Vendor', Vendor);
