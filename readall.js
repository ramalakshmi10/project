//TO READ ALL THE RECORDS
var http = require('http');
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/MongoDatabase";  
MongoClient.connect(url, function(error, db) {  
  if (error) throw error;  
  var dbs=db.db("bala");
  var collection=dbs.collection('student');
  collection.find({}).toArray(function(error, result) {  
    if (error) throw error;  
    console.log(result);  
    db.close();  
  });  
});  
