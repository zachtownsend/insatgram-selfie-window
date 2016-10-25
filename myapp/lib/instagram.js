var accessToken = '1714767474.4f5e0e7.fd2c70bf22404ab8ad65553941d396b0';
var Instagram = require('instagram-node').instagram();
var InstagramAPI = new InstagramAPI(accessToken);
Instagram.use({access_token: accessToken});

Instagram.tag_media_recent('selfie', {count: 50}, function(){
	console.log(err, medias, pagination, remaining, limit);
});