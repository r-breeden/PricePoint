const express = require('express');
const middleware = require('../middleware');
const dummyData = require('../../db/seeds/data/2017-09-04_amazon_data.json');

const router = express.Router();

router.route(['/', '/profile'])
  .get(middleware.auth.verify, (req, res) => {
    var state = {
      user: req.user, // get the user out of session and pass to template
      results: dummyData,

    };
    state.user.watchList = ['Nintendo Switch Gaming Console with Gray Joy-Con', 'Intel CM8066201919901 OEM Core i7-6700K Skylake Processor 4.0 GHz 8.0GTs-8MB LGA 1151 CPU', 'Predator XB281HK 28" 3840x2160 LED Monitor', 'Samsung 65" Class 4K (2160P) Smart QLED TV', 'Viaboot Raspberry Pi 3 Complete Kit with Premium Black Case']; 
    res.render('index.ejs', { state });
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
    req.logout();
    res.redirect('/');
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

router.get('/auth/twitter', middleware.passport.authenticate('twitter'));

router.get('/auth/twitter/callback', middleware.passport.authenticate('twitter', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

module.exports = router;
