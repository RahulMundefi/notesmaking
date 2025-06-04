const mongo = require('mongodb');

const Mongodbclient = mongo.MongoClient;

const Mongo_URL = "mongodb+srv://root:root@cluster0.fsel44z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


let _db;

const mongoConnect = (callback) =>{
  Mongodbclient.connect(Mongo_URL).
  then(client =>{
    callback();
   _db =client.db('notesdatabase');
  }).catch(err =>{
  console.log('Error while connecting to Mongo:', err);
  });
} 

const getDB = () =>{
  if(!_db)
  {
    throw new Error('Mongo not connected');
  } 
  return _db;
}



exports.mongoConnect = mongoConnect;
exports.getDB = getDB;