'use strict';
const express = require('express');
const router = express.Router();
const amazonAuth = require('../../config/development.json').amazon;
let amazon = require('amazon-product-api');
let helper = require('../helpers/helpers.js');

//setup for amazon-product-api 
//for use with amazon api query
let client = amazon.createClient({
  awsId: amazonAuth.awsid,
  awsSecret: amazonAuth.awsSecret,
  awsTag: amazonAuth.awsTag
});


router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;