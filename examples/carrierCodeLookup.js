sumo = require('sumo-nodejs');

sumo.carrierCodeLookup({
	mobile : 	'{mobile}', 
	shortcode : '{shortcode}'
}, function(err, data){
	
	if (err){
		console.log(err)
	} else {
		console.log(data);
	}
}); 

//response type: string
//response format: {carrier_code}