sumo = require('sumo-nodejs');

sumo.sendMt({
	mobile: '{mobile}', 
	carrier: '{carrier_code}', 
	shortcode: '{shortcode}',
	keyword: '{keyword}',
	msg: 'hello there'
}, function(err, data){
	if (err){
		console.log(err); 
	} else {
		console.log(data);
	}
});
//response params: mobile, smsid