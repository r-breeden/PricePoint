
exports.up = function(knex, Promise) {
  return knex.schema.table('products', table => {
    table.timestamp('last_updated').default(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', table => {
    table.dropColumn('last_updated');
  });
};
