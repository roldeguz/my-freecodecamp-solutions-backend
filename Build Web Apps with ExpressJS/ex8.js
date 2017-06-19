//Exercise 8
//JSON me

var express = require("express");
var fs = require("fs");
var app = express();

var port = process.argv[2];
var fp = process.argv[3];

app.get('/books', function(request, response) {
    fs.readFile(fp, function(error, data) {
        if (error)
            throw error;
            
        var d = JSON.parse(data);
        response.json(d);
    });
});

app.listen(port);
