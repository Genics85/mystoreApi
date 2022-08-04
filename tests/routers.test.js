const  request = require("supertest");
const express=require("express");

const peopleRoute=require("../routes/people.js");
const app=express();

app.use(express.json);
app.use("/people",peopleRoute);

describe("Testing the people path",()=>{
    
    test("GET /people - success - get all the books",()=>{
        async ()=>{
            const{body,statusCode}=await request(app).get("/people");
            expect(body).toEqual(expect.arrayContaining([
                expect.objectContaining({
                    age: expect.any(Number),
                    name:expect.any(String),
                    profession:expect.any(String)
    
                })
            ]))  
            expect(statusCode).toBe(200);
            
        }
    })
})