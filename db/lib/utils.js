const knex = require('knex')(require('../../knexfile'));

exports.rollbackMigrate = () => {
  return knex.migrate.rollback()
    .then(function () {
      return knex.migrate.latest();
    })
    .then(function () {
      return knex.seed.run();
    });
};

exports.rollback = () => {
  return knex.migrate.rollback();
};