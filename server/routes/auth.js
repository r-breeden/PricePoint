const express = require('express');
const middleware = require('../middleware');
const dummyData = require('../../db/seeds/data/2017-09-04_amazon_data.json');

const router = express.Router();

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    var state = {
      user: req.user, // get the user out of session and pass to template
      results: dummyData,
    };

    res.render('index.ejs', { state });
  });

router.route('/profile')
  .get(middleware.auth.verify, (req, res) => {
    var state = {
      user: req.user // get the user out of session and pass to template
    };

    res.render('profile.ejs', { state });
  });

router.route('/login')
  .get((req, res) => {
    var state = {
      message: req.flash('loginMessage')
    };

    res.render('login.ejs', { state });
  })
  .post(middleware.passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

router.route('/signup')
  .get((req, res) => {
    var state = {
      message: req.flash('signupMessage')
    };

    res.render('signup.ejs', { state });
  })
  .post(middleware.passport.authenticate('local-signup', {
    successRedirect: '/profile',
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
