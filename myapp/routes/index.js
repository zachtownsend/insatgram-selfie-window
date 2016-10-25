var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require('../lib/instagram.js');
  res.render('index', { title: 'Express' });

});

/* GET test page */
router.get('/test', function(req, res, next) {
	
	res.send('Hello World!');

});

module.exports = router;
