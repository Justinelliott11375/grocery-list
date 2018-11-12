var express = require('express');
var router = express.Router();
const listController = require('../src/controllers/listController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express App' });
});

module.exports = router;
