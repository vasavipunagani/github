const express=require('express')
const app=express();
let users=["vasavi","janu","dilli"]
app.get('/users',(req,res)=>{
    res.send(users)
})
let users=["vasavi","janu","dilli"]
app.get('/users',(req,res)=>{
    res.send(users)
    })
    app.post('/users',(req,res)=>{
         users.push("janu")
    res.send("user added successfully")

    })
    app.put('/users',(req,res)=>{
        users[1]="rupa"
        res.send("user updated successfully")
    })
    app.delete('/users',(req,res)=>{
        users.pop()
        res.send("user deleted successfully")

    })
    
app.listen(3000,()=>{
    console.log("Server is running")
})