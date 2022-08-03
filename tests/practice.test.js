const {deleteById}=require("../freestyle/util.js");

 describe("new to testing shih",()=>{
    test('testing if my test works', () => {
        let a=1;
        let b=2;
        expect(a+b).toBe(3);
     })
    
     test("testin if my multiplication is still good",()=>{
        let a=4;
        let b=6;
        expect(a*b).not.toBe(34);
     })
 })

 describe("Testing on imported functions",()=>{
    const user=[
        {
            name:"Genics",
            id:1
        },
        {
            name:"Dave",
            id:2
        },
        {
            name:"Sandra",
            id:3
        },
        {
            name:"Dorothy",
            id:4
        },
    ]
    test("if the delete function works",()=>{
        expect(deleteById(user,2)).toEqual(
            [
                {
                    name:"Genics",
                    id:1
                },
                {
                    name:"Sandra",
                    id:3
                },
                {
                    name:"Dorothy",
                    id:4
                },
            ]
        )
    })
   
 })