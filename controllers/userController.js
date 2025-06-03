exports.getHome = (req,res,next)=>{
  res.render('user',{myname:"Rahul"})
}