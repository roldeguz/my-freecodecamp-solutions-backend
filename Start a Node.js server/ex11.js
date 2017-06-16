//Exercise 11
//Http file server

var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var loc = process.argv[3];

var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(loc);
    
    stream.pipe(response);
});

server.listen(port);
