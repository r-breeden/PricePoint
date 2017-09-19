exports.up = function(knex, Promise) {
  return (
    knex.schema.alterTable('categories_products', table => {
      table.renameColumn('categories_id', 'category_id');
    })
  );
};

exports.down = function(knex, Promise) {
  return (
    knex.schema.alterTable('categories_products', table => {
      table.renameColumn('category_id', 'categories_id'); 
    })
  );
};
