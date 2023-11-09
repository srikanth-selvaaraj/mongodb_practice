var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj =[{ name: "Company Inc", address: "Highway 37" },{ name: "Srikanth", address: "ESI" },{ name: "Pravin", address: "Upplilipalayam" },{ name: "Shantha kumar", address: "Thirupur" }];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("No of document inserted: " + res.insertedCount);
      db.close();
    });
  });