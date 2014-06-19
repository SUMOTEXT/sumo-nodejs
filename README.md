sumo-nodejs
===========

This is a helper class for calling the [Sumotext Api](http://sumotext.github.io) from a nodejs platform.

##Quick Start
```
mkdir project-dir
cd project-dir
npm install sumo-nodejs
```
>  Note: Your IP address must be registered with Sumotext in order to make API calls. If it isn't, you will receive `ERROR:NOTIP` as a response to the endpoints.

###Send a Message
Read the docs page on [Sending an MT](http://sumotext.github.io/send-mt/) for details.
```javascript
sumo.sendMt({
	mobile: '_mobile', 
	carrier: '_carrier', 
	shortcode: '_shortcode',
	key: '_key',
	msg: 'the message contents'
}, function(err, data){
	if (err){
		console.log(err);
	} else {
		//do something with 'data' here, which contains response data
		console.log(data);
	}
});
```
The console will print the response
```javascript
{ mobile: '5012589948',
  smsid: 'E921445D-67DE-4423-9BD4-96783E20B4D4' }
```
