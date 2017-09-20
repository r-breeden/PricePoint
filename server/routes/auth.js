const express = require('express');
const middleware = require('../middleware');
const models = require('../../db/models');
const Promise = require('bluebird');
const router = express.Router();

router.route(['/', '/profile'])
  .get(middleware.auth.verify, (req, res) => {
    var state = {
      user: req.user,
      results: [],
      tables: []
    };
    models.Product.forge()
      .query(qb => {
        qb.orderBy('id', 'desc').limit(10);
      }).fetchAll({
        withRelated: [
          { 'prices': q => q.orderBy('created_at', 'DESC') },
          'prices.vendor',
          'product_urls.vendor'
        ]
      })
      .then(results => {
        state.results = results;
        models.Categories.where({
          profile_id: state.user.id
        }).fetchAll({withRelated: ['products']})
          .then(categories => {
            categories.serialize().forEach(el => {
              state.tables.push({
                tableId: el.id,
                name: el.name,
                list: el.products
              });
            });
            res.render('index.ejs', { state });
          });
      });
  });


router.route('/login')
  .get((req, res) => {
    var state = {
      message: req.flash('loginMessage')
    };

    res.render('index.ejs', { state });
  })
  .post(middleware.passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

router.route('/signup')
  .get((req, res) => {
    var state = {
      message: req.flash('signupMessage')
    };

    res.render('index.ejs', { state });
  })
  .post(middleware.passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));

router.route('/logout')
  .get((req, res) => {
    req.session.destroy(err => {
      res.clearCookie('connect.sid');
      res.redirect('/');
    });
  });

router.get('/auth/google', middleware.passport.authenticate('google', {
  scope: ['email', 'profile']
}));

router.get('/auth/google/callback', middleware.passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

router.get('/auth/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback', middleware.passport.authenticate('facebook', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
