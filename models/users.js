const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:(val)=>{
                const regex=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return val.match(regex);
            },
            message:"Please enter a valid email address",
        }
    },
    password:{
        type:String,
        required:true, 
        validate:{
            validator:(val)=>{
                return val.length > 6;
            },
            message:"Password should be more than six"
        }
    },
    address:{
        type:String,
        default:""
    },
    type:{
        type:String,
        default:"user"
    }
});

const Users = mongoose.model("Users",userSchema);

module.exports=Users;