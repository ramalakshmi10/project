var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(error, db) {
  if (error) throw error;
  var dbs = db.db("bala");
  var values = { Name: /^S/ };
  var newvalues = {$set: {Name: "Moorthy"} };
  var collection=dbs.collection('student');
  collection.updateMany(values, newvalues, function(error, res) {
    if (error) throw error;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});