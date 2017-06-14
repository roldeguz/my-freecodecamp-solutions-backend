//Exercise 5
var fs = require("fs");
var path = require("path");

//list, extension
function filterFolder(l, e) {
    return l.filter(function(file) {
        return path.extname(file) == '.' + e;
    });
};

module.exports = function (folder, ext, callback) {
   fs.readdir(folder, function(err, list) {
        if (err)
            return callback(err);
        
        var filteredList = filterFolder(list, ext);
        return callback(null, filteredList);
    });  
};
