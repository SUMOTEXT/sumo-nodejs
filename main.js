var sumo = require('./lib');

var _smsid = '7A2D2AF7-6851-4D22-BD41-BD8EE94C061E';
var _shortcode = '74700';

sumo.deliveryReport({
	smsid : 	_smsid, 
	shortcode : _shortcode
}, function(data){
	console.log(data);
});
/*
sumo.sendMt('5012589948', 'CINGULARUS', '74700', 'CSAPI', 'hey', function(data){
	console.log(data);
});*/

sumo.carrierCodeLookup({
	mobile : 	'5014139908', 
	shortcode : '74700'
}, function(data){
	console.log(data);
});