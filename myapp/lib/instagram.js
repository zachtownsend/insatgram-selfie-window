var accessToken = '1714767474.1677ed0.8f3526957e4b46e1aeb547044a2a23d2';
var InstagramAPI = require('instagram-api');
var InstagramAPI = new InstagramAPI(accessToken);
alert('test');
instagramAPI.userSelf().then(function(result){
	console.log(result);
}, function(err){
	console.log(err);
});