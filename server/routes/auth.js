const express = require('express');
const middleware = require('../middleware');
const dummyData = require('../../db/seeds/data/2017-09-04_amazon_data.json');
const models = require('../../db/models');
const router = express.Router();

router.route(['/', '/profile'])
  .get(middleware.auth.verify, (req, res) => {
    models.Product.forge()
      .query(qb => {
        qb.orderBy('id', 'desc').limit(10);
      }).fetchAll()
      .then(res => {
        return res.serialize();
      })
      .then(results => {
        var state = {
          user: req.user, // get the user out of session and pass to template
          results,
          tables: {default: []},
        };
        res.render('index.ejs', { state });
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
