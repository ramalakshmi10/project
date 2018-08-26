//TO INSERT ONE RECORD:

var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(error, db) {  
if (error) throw error;  
var result = {'Rollno':548,'Name':'Anan','Dept':'ECE','CGPA':6.5};
var dbs = db.db("bala"); 
var collection=dbs.collection('student');
collection.insertOne(result, function(error, res) {  
if (error) throw error;
console.log("******************TO INSERT ONE RECORD********************");
console.log("1 RECORD INSERTED SUCCESSFULLY");  
db.close();  
});  
});  

