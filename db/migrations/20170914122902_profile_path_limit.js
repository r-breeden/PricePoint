exports.up = function(knex, Promise) {
  return knex.schema.alterTable('profiles', table => {
    table.string('photo_path', 255).alter();
  });
};
