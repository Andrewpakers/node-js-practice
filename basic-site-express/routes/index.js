var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../pages/', 'index.html'));
});
router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../pages/', 'about.html'));
});
router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../pages/', 'contact.html'));
});

module.exports = router;
