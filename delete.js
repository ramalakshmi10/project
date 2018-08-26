//TO DELETE ONE RECORD

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(error, db) {
  if (error) throw error;
  var dbs = db.db("mydb");
  var values = { address: 'Mountain 21' };
  var collection=dbs.collection('student');
  collection.deleteOne(values, function(error, obj) {
    if (error) throw error;
    console.log("1 record deleted");
    db.close();
  });
});