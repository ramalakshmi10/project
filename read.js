//TO READ SINGLE RECORD

var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/MongoDatabase";  
MongoClient.connect(url, function(error, db) {  
  if (error) throw error; 
  var dbs=db.db("bala");
  var collection=dbs.collection('student');
  collection.findOne({}, function(error, result) {  
    if (error) throw error;  
	console.log("*********TO READ THE FIRST RECORD FROM STUDENT COLLECTION**********");
    console.log(result.Rollno);  
	console.log(result.Name); 
	console.log(result.Dept);
    console.log(result.CGPA); 	
    db.close();  
  });  
});  



//TO LIMIT AND READ THE VALUES
var http = require('http');
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase"; 
MongoClient.connect(url, function(error, db) {
  if (error) throw error;
  var dbs = db.db("bala");
  var collection=dbs.collection('student');
  collection.find().limit(5).toArray(function(error, result) {
    if (error) throw error;
    console.log(result);
    db.close();
  });
});



