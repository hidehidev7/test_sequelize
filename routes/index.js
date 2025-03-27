const express = require('express');
const router = express.Router();

let app;

router.setApp = a => {
  app = a;
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/serverbutton/', function (req, res, next) {
  res.render('serverbutton', { serverButtonCount: app.data.serverButtonCount });
});

let serverButtonDenyIPList = [];

router.get('/serverbutton/push/', function (req, res, next) {
  const ip = req.ip;
  if (serverButtonDenyIPList.includes(ip)) { }
  else {
    serverButtonDenyIPList.push(ip);
    app.data.serverButtonCount++;
  }
  setTimeout(() => {
    const index = serverButtonDenyIPList.indexOf(ip);
    if (index !== -1) serverButtonDenyIPList.splice(index, 1);
    res.redirect('/serverbutton/');
  }, 1000);
});

module.exports = router;
