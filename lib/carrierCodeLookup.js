//sendMt.js
var http = require("http");//
//--------------
// takes: smsid and shortode
// returns: object with data-[smsid(str), send(bool), message(str)]
//--------------
module.exports = function(obj, callback){
    var mobile = obj.mobile;
    var shortcode = obj.shortcode;
    
    http.get("http://mosms.sumotext.com/secure/sumoLookup.aspx?" + 
    	"mobile=" + mobile + "&shortcode=" + shortcode, 
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
                
                callback(data);
            });
        });
}
