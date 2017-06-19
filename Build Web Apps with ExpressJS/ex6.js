//Exercise 6
//Param pam pam

var express = require("express");
var app = express();

var port = process.argv[2];

app.put('/message/:id', function(request, response) {
    var id = request.params.id;
    
    response.end(require("crypto").createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

app.listen(port);
