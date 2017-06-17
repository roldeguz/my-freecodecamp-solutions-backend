//Exercise 4
//Good old form

var express = require("express");
var app = express();

var parser = require("body-parser");
var port = process.argv[2];

app.use(parser());

app.post('/form', function(request, response) {
   response.end(request.body.str.split('').reverse().join(''));
});

app.listen(port);
