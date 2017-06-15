//Exercise 9
//Juggling async

var http = require("http");
var bl = require("bl");

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

var result = [];
var done = 0;

var fetch = function(u, i) {
    http.get(u, function(response) {
        response.pipe(bl(function(error, data) {
            if (error)
                console.log(error);
            
            result[i] = data.toString();
            done++;
            if (done == urls.length) {
                print();
            }
        }))
    });
};

var print = function () {
    for (var i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
};

urls.map(function (u, i) {
    fetch(u, i);
});
