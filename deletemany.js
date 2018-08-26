// TO DELETE MANY RECORDS

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
  if (error) throw error;
  var dbs = db.db("bala");
  var values= { Name: /^A/ };
  dbs.collection("student").deleteMany(values, function(error, obj) {
    if (error) throw error;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});