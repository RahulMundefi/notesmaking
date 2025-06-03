const express = require('express');
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getHome);  

userRouter.post("/addnote",(req,res) =>{
  console.log(req.body);
})

module.exports = userRouter;