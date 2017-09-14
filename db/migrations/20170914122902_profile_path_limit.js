exports.up = function(knex, Promise) {
  return knex.schema.alterTable('profiles', table => {
    table.string('photo_path').alter();
  });
};
