//Exercise 7
//What's in query

var express = require("express");
var app = express();

var port = process.argv[2];

app.get('/search', function(request, response) {
    var q = request.query;
    response.send(q);
});

app.listen(port);
