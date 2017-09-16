'use strict';
const express = require('express');
const router = express.Router();
const Promise = require('bluebird');
const amazon = require('../middleware/amazon');

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

router.route('/search')
  .get((req, res) => {
    return amazon.search(req.query.q)
      .then(products => {
        return Promise.map(products, product => product.fetch({
          withRelated: [
            { 'prices': q => q.orderBy('created_at', 'DESC') },
            'prices.vendor',
            'product_urls.vendor'
          ]
        }));
      })
      .then(results => {
        res.send({results});
      })
      .catch(err => {
        console.log(err.message);
        res.sendStatus(503);
      });
  });
module.exports = router;
