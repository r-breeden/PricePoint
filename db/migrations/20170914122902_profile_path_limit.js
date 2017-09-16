exports.up = function(knex, Promise) {
  return knex.schema.alterTable('profiles', table => {
    table.string('photo_path').defaultTo('http://www.wilwia.com/images/default-user.png').alter();
  });
};

exports.down = function(knex, Promise) {
};
