// TO UPDATE ONE RECORD

var http = require('http');
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/MongoDatabase"; 
MongoClient.connect(url, function(error,db) {
  if (error) throw error;
  var dbs = db.db("bala");
  var values = { Rollno:"123" };
  var updatevalues = { $set: {Name: "Rama", Rollno: "927" } };
  dbs.collection("student").updateOne(values, updatevalues, function(error, res) {
    if (error) throw error;
    console.log("1 record updated");
    db.close();
  });
});

//TO UPDATE MANY RECORDS

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function(error, db) {
  if (error) throw error;
  var dbs = db.db("bala");
  var values = { Name: /^S/ };
  var newvalues = {$set: {Name: "Moorthy"} };
  dbs.collection("student").updateMany(values, newvalues, function(error, res) {
    if (error) throw error;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});