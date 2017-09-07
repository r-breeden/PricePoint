'use strict';
const express = require('express');
const router = express.Router();
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
      .then(results => {
        res.send(results);
      })
      .catch(err => {
        res.status(503).send(err);
      });
  });

module.exports = router;