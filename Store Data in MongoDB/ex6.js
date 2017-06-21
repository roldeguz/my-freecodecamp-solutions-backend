//Exercise 6
//Update
//To start mongo: mongod --port 27017 --dbpath=./data --smallfiles

var mongo = require("mongodb").MongoClient;

var dbn = process.argv[2];
var url = "mongodb://localhost:27017/" + dbn;

mongo.connect(url, function(error, db) {
    if (error) 
        throw error;
            
    var coll = db.collection('users');
    
    coll.update({username: 'tinatime'}, {$set: {age: 40}}, function(error, data) {
        if (error)
            throw error;
        
        db.close();
    });
});
