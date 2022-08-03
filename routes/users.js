const express = require("express");
const bcrypt=require("bcryptjs");
const {userSignIn,userSignUp}=require("../controllers/users.js");
const jwt   =require("jsonwebtoken");
const Users = require("../models/users");
const router =express.Router();


//Sign Up Route
router.post("/signup",userSignUp) 
//Sign in route
router.post("/signin",userSignIn)

 
module.exports=router;