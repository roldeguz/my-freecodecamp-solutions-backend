//Exercise 4
//My first async I/O

var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
    
    if (err)
        throw err;
    
    var count = data.toString().split("\n").length - 1;
    console.log(count);
});
