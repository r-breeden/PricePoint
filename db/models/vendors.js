const db = require('../');

const Vendor = db.Model.extend({
  tableName: 'vendors',

}, {
  findOrCreate: function(name) {
    return this.where({ name }).fetch()
      .then(vendor => {
        if (vendor) {
          return vendor;
        } else {
          vendor = {
            name
          };

          // TODO: This is jank
          if (name === 'Amazon') {
            vendor.url = 'https://amazon.com';
          } else if (name === 'Walmart') {
            vendor.url = 'https://walmart.com';
          } else {
            vendor.url = 'http://example.com';
          }

          return models.Vendor.forge(vendor).save();
        }
      });
  }
});

module.exports = db.model('Vendor', Vendor);
