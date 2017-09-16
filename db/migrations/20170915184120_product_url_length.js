
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('product_urls', table => {
    table.string('url', 255).notNullable().alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('product_urls', table => {
    table.string('url', 100).notNullable().alter();
  });
};
