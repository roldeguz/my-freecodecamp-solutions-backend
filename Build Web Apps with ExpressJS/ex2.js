//Exercise 2
//Static

var express = require("express");
var path = require("path");
var app = express();

var port = process.argv[2];
var fp = process.argv[3];

app.use(express.static(fp||path.join(__dirname, 'public')));

app.listen(port);
