const express = require("express");
const bcrypt=require("bcryptjs");
const Users = require("../models/users");
const router =express.Router();

router.post("/signup",async (req,res)=>{
    try{
        const{name,email,password}=req.body; 
        const userExists= await Users.findOne({email});
        if(userExists){
            return res.status(400).json({msg:"User with this email already exists"});
        }

        const hashPass= await bcrypt.hash(password,10);

        let newUser=new Users({
            name,
            email,
            password:hashPass
        });
        
        newUser = await newUser.save();
        res.status(200).json(newUser);
    }
    catch (err){
        res.status(500).json({error:err.message});
    }
}) 

 
module.exports=router;