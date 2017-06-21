//Exercise 8
//Count
//To start mongo: mongod --port 27017 --dbpath=./data --smallfiles

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var age = parseInt(process.argv[2]);

mongo.connect(url, function(error, db) {
   if (error)
      throw error;
   
   var coll = db.collection('parrots');
   
   coll.count({age: { $gt: age }}, function(error, count) {
        if (error)
            throw error;
            
        console.log(count);
        db.close();
   });
});
