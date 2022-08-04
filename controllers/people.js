const people=require("../data/people.js");

const peopleHome=(req,res)=>{
    res.send(people);
}


module.exports=peopleHome;