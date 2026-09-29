//function method1(){
   // console.log("method1 content")
//}
//function method2(){
   // console.log("method2 content")
//}

//module.exports={
    //key1:method1,
    //key2:method2
//}
const express=require('express')
const app=express();


app.get('/home',(req,res)=>{
    res.send("this is a emmpty")
    console.log(express.request.headers)
   // console.log(req.query)
})
    app.get('/',(req,res)=>{
        res.send("the server is runnin at port 3001")
    })
    app.get('/about',(req,rest)=>{
        console.log("about page")
    })
    app.listen(3001,()=>{
    console.log("server is running")
    })
        