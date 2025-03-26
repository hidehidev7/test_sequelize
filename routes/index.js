var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/serverbutton/', function(req, res, next) {
    res.render('serverbutton');
});

router.get('/serverbutton/push/', function(req, res, next) {
  setTimeout(() => {
    res.render('serverbutton');
  }, 1000);
});

module.exports = router;
