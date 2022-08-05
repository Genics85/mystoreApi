const express=require("express");
const mongoose=require("mongoose");
const userRouter=require("./routes/users.js");
const app=express();

const port= process.env.PORT || 5000;

//connecting to database
mongoose.connect("mongodb://localhost:27017/foseonline")
.then(()=>{
    console.log("connected to the database successfully");
})
.catch((err)=>console.log(err));

//MiddleWares
app.use(express.json());
app.use("/user",userRouter);


if (process.env.NODE_ENV !== 'test') {
    app.listen(port,"0.0.0.0",()=>{
        console.log(`listening on port ${port}`)
    });
  }


module.exports=app