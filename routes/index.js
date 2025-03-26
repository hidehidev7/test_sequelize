var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/serverbutton/', function(req, res, next) {
  res.render('serverbutton');
});

module.exports = router;
