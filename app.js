const express = require('express'); 

const app =express(); 

const userRouter = require("./router/user-router");
const { mongoConnect } = require('./utils/databaseutil');

app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.urlencoded());
app.use(userRouter);



const PORT = 3000; 
mongoConnect(() => {
app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});
})
  