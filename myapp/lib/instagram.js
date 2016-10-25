var accessToken = '1714767474.4f5e0e7.fd2c70bf22404ab8ad65553941d396b0';
var InstagramAPI = require('instagram-api');
var InstagramAPI = new InstagramAPI(accessToken);
var block = false;

function getMedia(){
	if (block) {
		return false;
	}
	InstagramAPI.getMediasByTag('tilly', {count: 20 }).then(function(result){
		console.log(result.data);
	}, function(err){
		console.log(err);
	});
	block = true;
	setTimeout(function(){
		block = false;
	}, (500/60)*1000);
}

getMedia();