var sumo = require('./lib');

var smsid = '7A2D2AF7-6851-4D22-BD41-BD8EE94C061E';
var shortcode = '74700';

sumo.deliveryReport(smsid, shortcode, function(data){
	console.log(data);
});

