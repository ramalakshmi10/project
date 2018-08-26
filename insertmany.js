//TO INSERT MULTIPLE RECORDS:

  var MongoClient = require('mongodb').MongoClient;  
  var url = "mongodb://localhost:27017/ MongoDatabase";  
  MongoClient.connect(url, function(error, db) {  
  if (error) throw error;  
  var result = [{'Rollno':548,'Name':'Anan','Dept':'ECE','CGPA':6.5},
              {'Rollno':123,'Name':'Rama','Dept':'CSE','CGPA':8.0},
			  {'Rollno':456,'Name':'Swathy','Dept':'IT','CGPA':8.5},
			  {'Rollno':789,'Name':'Mani','Dept':'EEE','CGPA':7.2},
			  {'Rollno':154,'Name':'Shun','Dept':'ECE','CGPA':7.2},
			  {'Rollno':765,'Name':'Lakshmi','Dept':'CSE','CGPA':9.0}
			  ];

var dbs = db.db("bala");
var collection=dbs.collection('student'); 
collection.insertMany(result, function(error, res) {  
if (error) throw error;
console.log("******************TO INSERT MANY RECORDS********************"); 
console.log("TOTAL NUMBER OF RECORDS INSERTED: " + res.insertedCount);  
db.close();  
});  
});  


