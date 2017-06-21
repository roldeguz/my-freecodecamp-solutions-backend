//Exercise 7
//Remove
//To start mongo: mongod --port 27017 --dbpath=./data --smallfiles

var mongo = require("mongodb").MongoClient;

var dbn = process.argv[2];
var url = "mongodb://localhost:27017/" + dbn;

var colln = process.argv[3];
var id = process.argv[4];

mongo.connect(url, function(error, db) {
    if (error) 
        throw error;
            
    var coll = db.collection(colln);
    
    coll.remove({_id: id}, function(error, data) {
        if (error)
            throw error;
        
        db.close();
    });
});
