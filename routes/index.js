const express = require('express');
const router = express.Router();

let app;

router.setApp = a => {
  app = a;
}

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
