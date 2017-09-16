exports.up = function(knex, Promise) {
  return (
    knex.schema.createTableIfNotExists('categories', table => {
      table.increments('id').unsigned().primary();
      table.string('name').notNullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.integer('product_id').references('products.id').onDelete('CASCADE');
    }));
};

exports.down = function(knex, Promise) {
  return (
    knex.schema.table('categories', table => {
      table.dropForeign('profile_id');
      table.dropColumn('profile_id');
      table.dropForeign('product_id');
      table.dropColumn('product_id');
    }).dropTable('categories'));
};
