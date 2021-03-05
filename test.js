var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


// to create the collection/table into database

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//   var dbo = db.db("mydb");
//   //Create a collection name "customers":
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// to insert in database


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [{ name: "Ashwini", age: 21 ,gender: "male"},{ name: "gaurav", age: 21 ,gender: "male"}];
//     dbo.collection("customers").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("document inserted");
//       db.close();
//     });
//   });


// to find the data table or to show the table detail


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");

// // to show all the data

// dbo.collection("customers").find({}).toArray(function(err, result) {

//   // to find all the filter data
//   // dbo.collection("customers").find({'name':{$in :['Ashwini','gaurav']}}).toArray(function(err, result) {
 
// //  to find one data 
//     // dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log("data found")
//     console.log(result);
//     db.close();
//   });
// });


// delete the single data

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
  
//   //  to delete one data 
//       dbo.collection("customers").deleteOne({'name':"gaurav"}, function(err, result) {
//       if (err) throw err;
//       console.log("data found")
//       console.log(result);
//       db.close();
//     });
//   });


// update the data in data base

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: "gaurav" };
  var newvalues = { $set: {name: "Gaurav", age: 50 } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});