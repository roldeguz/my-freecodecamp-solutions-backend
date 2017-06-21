//Exercise 9
//Aggregate
//To start mongo: mongod --port 27017 --dbpath=./data --smallfiles

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var size = process.argv[2];

mongo.connect(url, function(error, db) {
    if (error)
        throw error;
        
    var coll = db.collection('prices');
    
    coll.aggregate([
        { $match: {size: size} },
        { $group: {_id: 'average', average: { $avg: '$price'}}}
    ]).toArray(function(error, results) {
        if (error)
            throw error;    
        
        console.log(Number(results[0]['average']).toFixed(2));
        db.close();
    });
});
