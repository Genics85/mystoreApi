const  request = require("supertest");
const peopleRoute=require("../routes/people.js");
const app=require("../app.js"); 


describe("POST /users",()=>{
    describe("given a username and password",()=>{
        //should respond with a 200 status code
        test("should respond with a 200 status code",async()=>{
            const response=await request(app).post("/users/signin").send({
                email:"pass@gmail.com",
                password:"passss"
            })
            expect(response.statusCode).toBe(200)
        })
        //should specify json in the content type header
        test("response should be in a json format",async()=>{
            const response=await request(app).post("/users/signin").send({
                email:"pass@gmail.com",
                password:"passss"
            })
            expect(response.header["content-type"]).toEqual(expect.stringContaining("json"))
        })
        //shoudl return a message 
        test("response should have a msg property in its body",async()=>{
            const response=await request(app).post("/users/signin").send({
                email:"pass@gmail.com",
                password:"passss"
            })
            expect(response.body.msg).tobeDefined()
        })
    }) 
    describe("when username or password is undefined",()=>{  
        //should respond with a 400 status 
        test("status code should be 400 when password is ommited",async()=>{
            const response=await request(app).post("/users/signin").send({
                email:"pass@gmail.com",
            })
            expect(response.statusCode).toBe(404)
        })
    })
})  