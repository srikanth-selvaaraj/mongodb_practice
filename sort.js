var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo = db.db('mydb');
    var sort = {name:1};

    dbo.collection("customers").find().sort(sort).toArray(function(err,result){     //1 - for ascending
        if (err) throw err;                                                         //-1 - for deascending
        console.log(result);
        db.close();
    });
}); 