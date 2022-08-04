const express=require("express");
const peopleHome=require("../controllers/people.js")
const router=express.Router();

router.get("/",peopleHome);

module.exports=router;