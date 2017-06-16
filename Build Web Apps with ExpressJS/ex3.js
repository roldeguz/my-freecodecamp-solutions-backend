//Exercise 3
//Jade

var express = require("express");
var path = require("path");
var app = express();

var port = process.argv[2];
var template = process.argv[3];

app.set('view engine', 'jade');
app.set('views', template);

app.get('/home', function(request, response) {
   response.render('index', {date: new Date().toDateString()});
});

app.listen(port);
