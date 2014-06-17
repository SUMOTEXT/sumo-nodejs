var http = require("http");


http.get("http://mosms.sumotext.com/secure/sumoReport.aspx?smsid=7A2D2AF7-6851-4D22-BD41-BD8EE94C061E&shortcode=74700", function (http_res) {
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
        console.log(data);
    });
});