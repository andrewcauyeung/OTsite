var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
});

/* GET brothers page. */
router.get('/brothers', function(req, res, next) {
  res.sendfile('./views/brothers.html');
});

/* GET rush page. */
router.get('/rush', function(req, res, next) {
  res.sendfile('./views/rush.html');
});

/* GET rush form page */
router.get('/rush_form', function(req, res, next) {
  res.sendfile('./views/rush_form.html');
});

/* 404 redirects to / */
router.use(function(req, res, next) {
  res.status(404).redirect('/');
});

module.exports = router;
