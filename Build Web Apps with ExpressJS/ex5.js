//Exercise 5
//Stylish CSS

var express = require("express");
var app = express();

var stylus = require("stylus");
var port = process.argv[2];
var folder = process.argv[3];

app.use(stylus.middleware(folder));
app.use(express.static(folder));

app.listen(port);
