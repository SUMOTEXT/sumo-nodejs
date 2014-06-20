sumo = require('sumo-nodejs');

sumo.manageGroups({
	country: '{country}',
	shortcode: '{shortcode}',
	key: '{key}',
	group: '{group_name}',
	action: '{action}',
	mobile: '{[optional] mobile}'
}, function(err, data){
	if (err){
		console.log(err);
	} else {
		console.log(data);
	}
});

//response data: "Action {action} OK" as string