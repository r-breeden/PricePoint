'use strict';
const express = require('express');
const router = express.Router();
const config = require('config')['Amazon'];
let amazon = require('amazon-product-api');
let helper = require('../helper/helpers.js');

let client = amazon.createClient(config);

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;