var accessToken = '1714767474.4f5e0e7.fd2c70bf22404ab8ad65553941d396b0';
var InstagramAPI = require('instagram-api');
var InstagramAPI = new InstagramAPI(accessToken);
// alert('test');
// InstagramAPI.userSelf().then(function(result){
// 	console.log(result);
// }, function(err){
// 	console.log(err);
// });

InstagramAPI.getMediasByTag('selfie', {count: 50}).then(function(result){
	console.log(result);
}, function(err){
	console.log(err);
});