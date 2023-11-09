var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db('mydb');
    var query = {name: 'Company Inc'};
    dbo.collection('customers').deleteOne(query,function(err, obj){
        if (err) throw err;
        console.log('1 Document Deleted');
        db.close();
    });
});