sumo = require('sumo-nodejs');


sumo.deliveryReport({
	smsid : 	'{smsid}', 
	shortcode : '{shortcode}'
}, function(err, data){
	if (err){
		console.log(err);
	} else {
		console.log(data);
	}
});

//response data: smsid, sent, message