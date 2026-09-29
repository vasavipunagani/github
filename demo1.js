const express=require('express')
const app=express();

//  app.get('/home/:id',(req,res)=>{
//     res.send("the server is running...in port 3001")//static url paths
//     console.log(req.params.id)
//  })
//app.get('/home',(req,res)=>{
    //res.send("This is empty page")//url:http://localhost:3001/home
    //console.log(req.headers)

//})
// app.get('/about',(req,res)=>{
//     res.send("this is about page")//query url:http://localhost:3001/about?name=nani&age=18
//     console.log(req.query)
//     console.log(req.query.name)
// })
//app.get('/home',(req,res)=>{
    //res.send("This is empty page")//url:http://localhost:3001/home
    //console.log(req.method)

//})
//app.get('/home',(req,res)=>{
    //res.json("this is webpage")
    //res.status(305).send("this is the status of 300")
    //res.sendFile(__dirname+"/index.html")
    //res.redirect("/about")

//})
//app.get('/about',(req,res)=>{
    //res.send("this is about page ")
//})
//app.post('/home',(req,res)=>{
   // res.send("this is post metod")
//})
//app.put('/home',(req,res)=>{
    //res.send("this is put metod")
//})
//app.delete('/home',(req,res)=>{
  //  res.send("this is delete metod")
//})

//CURD OPERATIONS
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
