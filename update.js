var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db('mydb');
    var query = { address: 'ESI'};
    var new_value = { $set: {address:'CBE'}};
    dbo.collection('customers').updateOne(query,new_value,function(err,res){
        if (err) throw err;
        console.log("1 Document Update");
        db.close();
    });
});