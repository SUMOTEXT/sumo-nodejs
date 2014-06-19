//sendMt.js
var http = require("http");//
//--------------
// takes: smsid and shortode
// returns: object with data-[smsid(str), send(bool), message(str)]
//--------------
module.exports = function(obj, callback){

    http.get("http://mosms.sumotext.com/secure/sumoGroup.aspx?" + 
    	"country=" + obj.country + "&shortcode=" + obj.shortcode + 
        "&key=" + obj.key + "&group=" + obj.group + 
        "&action=" + obj.action, 
        function (http_res) {
            // initialize the container for our data
            var data = "";

            // this event fires many times, each time collecting another piece of the response
            http_res.on("data", function (chunk) {
                // append this chunk to our growing `data` var
                data += chunk;
            });

            // this event fires *one* time, after all the `data` events/chunks have been gathered
            http_res.on("end", function () {
                // you can use res.send instead of console.log to output via express
                data = data.split('\n')[0];
                if (data == 'NOTIP  IP Address Not Registered with sumotext.'){
                    callback(new Error('IP not registered with Sumotext'));
                } else {
                    callback(null, data);
                }
            });
        });
}

