const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',

  auths: function() {
    return this.hasMany('Auth');
  },

  followedProducts: function() {
    return this.belongsToMany('Product', 'followed_products');
  },
});

module.exports = db.model('Profile', Profile);
