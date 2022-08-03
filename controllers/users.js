const Users = require("../models/users");
const bcrypt=require("bcryptjs");

const userSignIn = async (req,res) =>{ 
    try {
        const {email,password} =req.body;
        const user= await Users.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Incorrect Email"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Wrong password"});
        }
        const token=jwt.sign({id:user._id},"userPasswordToken");
        res.json({token,...user._doc});
    } catch (error) {    
    }
}

const userSignUp = async (req,res)=>{
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
}

module.exports={userSignIn,userSignUp}; 