const express = require('express');
const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getHome);  

userRouter.post("/addnote",userController.postHome); 
userRouter.get("/notes-list", userController.getNotes);

module.exports = userRouter;