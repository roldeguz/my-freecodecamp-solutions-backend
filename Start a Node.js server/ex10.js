//Exercise 10
//Time Server

var net = require("net");
var strftime = require("strftime");
var port = process.argv[2];

var server = net.createServer(function (socket) {
    //format: YYYY-MM-DD hh:mm
    var cd = strftime('%Y-%m-%d %H:%M', new Date()) + '\n';
    
    socket.end(cd);
});

server.listen(port);
