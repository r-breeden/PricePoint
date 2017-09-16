'use strict';
const { CronJob } = require('cron');
const app = require('./app');
const db = require('../db');
const { Products: productController } = require('./controllers');
const PORT = process.env.PORT || 3000;

new CronJob({
  cronTime: '0 */15 * * * *',
  onTick: productController.updateLeastRecent,
  start: true,
});

db.knex.migrate.latest()
  .then(() => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  }));
