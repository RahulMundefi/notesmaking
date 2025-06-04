const notesApp = require('../models/notes')


exports.getHome = (req,res,next)=>{
  res.render('home',{myname:"Rahul"})
}  


exports.postHome = (req,res,next) => {
      const {title , content} = req.body; 
      const notes = new notesApp(title,content);
      notes.save().then(() =>{
        console.log("Notes saved successfully");
      })

      res.redirect("/notes-list");
} 


exports.getNotes = (req,res,next) =>{
  notesApp.fetchAll().then(noteslist =>{
    res.render('notesview',{
      noteslist : noteslist ,
      myname : "Rahul",
    })
  });
};