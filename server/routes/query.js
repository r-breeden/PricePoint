'use strict';
const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const models = require('../../db/models');

router.route('/itemPrices')
  .get((req, res) => {
    return models.Product.where({ upc: req.query.upc }).fetch({
      withRelated: [
        { 'prices': q => q.orderBy('created_at', 'DESC') },
        'prices.vendor',
        'product_urls.vendor'
      ]
    })
      .then((profile) => {
        if (profile) {
          return profile;
        } else {
          console.log('WARNING: item not in database.');
          res.sendStatus(404);
        }
      })
      .error(err => {
        console.error('No friend with that Email exists');
        throw err;
      })
      .then((profile) => {
        res.send(profile);
      })
      .catch(() => {
        console.log('WARNING: item not in database.');
        res.sendStatus(404);
      });
  });

module.exports = router;
