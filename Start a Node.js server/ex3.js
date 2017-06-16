//Exercise 3
//filtered ls
var fs = require("fs");

var buff = fs.readFileSync(process.argv[2]);
var sbuff = buff.toString();
var abuff = sbuff.split("\n");
var count = abuff.length - 1;
console.log(count);
