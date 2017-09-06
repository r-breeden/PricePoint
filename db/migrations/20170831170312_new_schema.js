
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('profiles', function (table) {
      table.string('photo_path', 100).nullable();
    }),
    knex.schema.createTableIfNotExists('vendors', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).notNullable();
      table.string('url', 100).unique().notNullable();
    }),
    knex.schema.createTableIfNotExists('products', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).notNullable();
      table.string('upc', 100).unique().notNullable();
      table.string('description', 255).notNullable();
    }),
    knex.schema.createTableIfNotExists('product_urls', function(table) {
      table.increments('id').unsigned().primary();
      table.string('url', 100).notNullable();
      table.integer('vendor_id').references('vendors.id').onDelete('CASCADE');
      table.integer('product_id').references('products.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('prices', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('vendor_id').references('vendors.id').onDelete('CASCADE');
      table.integer('product_id').references('products.id').onDelete('CASCADE');
      table.decimal('price', 14, 2).notNullable();
      table.timestamps();
    }),
    knex.schema.createTableIfNotExists('followed_products', function(table) {
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.integer('product_id').references('products.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('followed_products'),
    knex.schema.dropTable('prices'),
    knex.schema.dropTable('product_urls'),
    knex.schema.dropTable('products'),
    knex.schema.dropTable('vendors'),
    knex.schema.table('profiles', (table) => {
      table.dropColumn('photo_path');
    }),
  ]);
};
