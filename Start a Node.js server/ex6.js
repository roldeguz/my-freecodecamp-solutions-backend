//Exercise 6
var myModule = require("./ex5");

var folder = process.argv[2]; //path arg
var ext = process.argv[3]; //ext arg

var callback = function(error, filtered) {
    if (error) {
        console.log('error');
        console.log(error);
    }
    
    for (var index in filtered) {
        console.log(filtered[index]);
     }
};

myModule(folder, ext, callback);
