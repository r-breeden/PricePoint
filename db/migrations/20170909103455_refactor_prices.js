
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('vendors', function(table) {
      table.string('url').notNullable().alter();
    }),
    knex.schema.alterTable('products', function(table) {
      table.string('upc', 12).unique().notNullable().alter();
      table.text('description').alter();
    }),
    knex.schema.renameTable('product_url', 'product_urls'),
    knex.schema.alterTable('product_urls', function(table) {
      table.renameColumn('vender_id', 'vendor_id');
    }),
    knex.schema.alterTable('prices', function(table) {
      table.renameColumn('vender_id', 'vendor_id');
      table.integer('price').notNullable().alter();
      table.dropColumn('data');
      table.timestamps();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('vendors', function(table) {
      table.string('url', 100).notNullable().alter();
    }),
    knex.schema.alterTable('products', function(table) {
      table.string('description', 255).notNullable().alter();
      table.string('upc', 100).notNullable().alter();
    }),
    knex.schema.alterTable('product_urls', function(table) {
      table.renameColumn('vendor_id', 'vender_id');
    }),
    knex.schema.renameTable('product_urls', 'product_url'),
    knex.schema.alterTable('prices', function(table) {
      table.renameColumn('vendor_id', 'vender_id');
      table.decimal('price', 15, 2).notNullable().alter();
      table.date('data');
      table.dropTimestamps();
    }),
  ]);
};
