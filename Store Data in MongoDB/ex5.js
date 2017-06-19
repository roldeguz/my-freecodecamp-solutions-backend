//Exercise 5
//Insert
//To start mongo: mongod --port 27017 --dbpath=./data --smallfiles

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var fn = process.argv[2];
var ln = process.argv[3];

mongo.connect(url, function(error, db) {
    if (error) 
        throw error;
            
    var coll = db.collection('docs');
    var d = {firstName: fn, lastName: ln};
    
    coll.insert(d, function(error, data) {
        if (error)
            throw error;
        
        
    });
    console.log(JSON.stringify(d));
    db.close();
});
