'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');
const models = require('../db/models');


const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(middleware.morgan('dev'));
}

app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/api', routes.api);
app.use('/api/profiles', routes.profiles);
app.use('/product/:upc', (req, res) => {
  var state = {};
  models.Product.where({ upc: req.params.upc }).fetch()
    .then(product => {
      if (!product) {
        throw product;
      }
      return product.serializeWithPrices()
        .then(productWithPrices => {
          state.results = [productWithPrices];
        });
      state.user = req.user;
      state.tables = {
        default: [
          {item: 'Nintendo Switch Gaming Console with Gray Joy-Con', lowestPrice: '$1.00'},
          {item: 'Intel CM8066201919901 OEM Core i7-6700K Skylake Processor 4.0 GHz 8.0GTs-8MB LGA 1151 CPU', lowestPrice: '$1.00'},
          {item: 'Predator XB281HK 28" 3840x2160 LED Monitor', lowestPrice: '$1.00'},
          {item: 'Samsung 65" Class 4K (2160P) Smart QLED TV', lowestPrice: '$1.00'},
          {item: 'Viaboot Raspberry Pi 3 Complete Kit with Premium Black Case', lowestPrice: '$1.00'}
        ]};
      res.render('index', {state});
      // res.status(200).send(product);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});


module.exports = app;
