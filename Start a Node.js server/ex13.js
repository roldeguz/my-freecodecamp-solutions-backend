//Exercise 13
//Http json api server

var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request.method == 'GET') {
        var info = url.parse(request.url, true);
        var qdata = info.query;
        var iso = qdata.iso;
        var d = new Date(iso);
        var result;
        
        switch (info.pathname) {
            case '/api/parsetime':
                result = {"hour": d.getHours(), "minute": d.getMinutes(), "second": d.getSeconds()};
                break;
                
            case '/api/unixtime':
                result = {"unixtime": d.getTime()};
                break;
                
        }
        
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(result))
    }
});
