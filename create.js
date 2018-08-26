var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(error, db) {  
if (error) throw error;  
var dbs=db.db("bala");
dbs.createCollection("student", function(error, res) {  
if (error) throw error;  
console.log("Collection Created");  
db.close();  
});  
});  