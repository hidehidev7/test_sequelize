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
  res.render('serverbutton', { serverButtonCount: app.data.serverButtonCount });
});

router.get('/serverbutton/push/', function(req, res, next) {
  app.data.serverButtonCount++;
  setTimeout(() => {
    res.redirect('/serverbutton/');
  }, 1000);
});

module.exports = router;
