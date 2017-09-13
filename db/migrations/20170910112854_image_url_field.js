
exports.up = function(knex, Promise) {
  return knex.schema.table('products', table => {
    table.string('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', table => {
    table.dropColumn('image_url');
  });
};
