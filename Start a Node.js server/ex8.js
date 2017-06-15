//Exercise 8
//http collect

var http = require("http");
var bl = require("bl");

var url = process.argv[2];

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err)
            console.log(err);
        
        console.log(data.length);
        console.log(data.toString());
    }))
});
