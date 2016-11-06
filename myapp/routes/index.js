var express = require('express');
var router = express.Router();

var accessToken = '1714767474.4f5e0e7.fd2c70bf22404ab8ad65553941d396b0';
var InstagramAPI = require('instagram-api');
var InstagramAPI = new InstagramAPI(accessToken);
var block = false;



/* GET home page. */
router.get('/', function(req, res, next) {
	var data, err;

	InstagramAPI.getMediasByTag('tilly', {count: 20 }).then(function(result){
		data = result.data;
	}, function(err){
		err = err;
	});

	console.log(data);

	res.render('index', data);

});

/* GET test page */
router.get('/test', function(req, res, next) {
	
	res.send('Hello World!');

});

module.exports = router;
