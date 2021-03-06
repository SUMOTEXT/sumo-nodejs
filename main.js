var sumo = require('./lib');

var _smsid = '7A2D2AF7-6851-4D22-BD41-BD8EE94C061E';
var _shortcode = '74700';

sumo.deliveryReport({
	smsid : 	_smsid, 
	shortcode : _shortcode
}, function(err, data){
	if (err){
		console.log(err);
	} else {
		console.log(data);
	}
});
/*
sumo.sendMt({
	mobile: '5012589948', 
	carrier: 'CINGULARUS', 
	shortcode: '74700',
	keyword: 'CSAPI',
	msg: 'yoyo'
}, function(err, data){
	if (err){
		console.log(err);
	} else {
		console.log(data);
	}
});
*/
sumo.carrierCodeLookup({
	mobile : 	'5014139908', 
	shortcode : '74700'
}, function(err, data){
	
	if (err){
		console.log(err)
	} else {
		console.log(data);
	}
}); 

sumo.manageGroups({
	country: 'USA',
	shortcode: '74700',
	key: 'CSAPI',
	group: 'woop1',
	action: 'add',
	mobile: ''
}, function(err, data){
	if (err){
		console.log(err);
	} else {
		console.log(data);
	}
});