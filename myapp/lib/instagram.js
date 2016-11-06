var accessToken = '1714767474.4f5e0e7.fd2c70bf22404ab8ad65553941d396b0';
var InstagramAPI = require('instagram-api');
var util = require('util');
var InstagramAPI = new InstagramAPI(accessToken);
var block = false;

function getMedia(){
	if (block) {
		return false;
	}
	var data, err;

	InstagramAPI.getMediasByTag('tilly', {count: 20 }).then(function(result){
		data = result.data;
		data = {test: 'TEST'};
		console.log(util.inspect(result, {showHidden: false, depth: null}));
	}, function(err){
		err = err;
	});

	console.log(util.inspect({test: 'test'}, {showHidden: false, depth: null}));
	block = true;
	setTimeout(function(){
		block = false;
	}, (500/60)*1000);

	return data;
}

getMedia();