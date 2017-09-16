const db = require('../');

const Vendor = db.Model.extend({
  tableName: 'vendors',

  prices: function() {
    return this.hasMany('Price');
  },

  product_urls: function() {
    return this.hasMany('ProductUrl');
  },

  products: function() {
    return this.belongsToMany('Product')
      .through('ProductUrl');
  },
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

          return this.forge(vendor).save();
        }
      });
  }
});

module.exports = db.model('Vendor', Vendor);
