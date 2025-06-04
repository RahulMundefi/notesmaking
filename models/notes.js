 const {getDB} = require('../utils/databaseutil');
 
 
 module.exports = class notesApp {
   
  constructor( title ,discription,_id)
  {
    this.title =title; 
    this.discription = discription;
    if(_id)
    {
      this._id = _id;
    }
  }
  

   
   save(){
     const db = getDB();
     return db.collection('notes').insertone(this);
   } 

   fetchAll() {
    const db = getDB();
    return db.collection('notes').find().toArray();
   }

 };