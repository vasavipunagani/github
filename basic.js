// // const files=require('./module.js')
// // const os=require('os')
// // function greet(){
// //     console.log("Node.js started")
// // }
// // greet()
// // files.key1()
// // files.key2()
// // console.log(os.freemem())
// // console.log(os.hostname())
// const fs=require('fs')
// fs.writeFile('./data.txt',"New content added",(err) => {
//     if(err){
//         console.log("error occured")
//     }
//     console.log("File created successfully")
// })
// fs.readFile("./data.txt",'utf8',(err,data) => {
//     if(err){
//         console.log("error")
//     }
//     console.log("data is ",data)
// })
// /* fs.writeFile('./data.txt',"New content added",(err)=>{//callback function
// if(err){//err-is an error to findout
//     console.log("error occured")
// }
// console.log("file created successfully")
// })//to create a file in a same folder.
// fs.readFile('./data.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("error")
//     }
//     console.log("data is",data)
// })
// fs.appendFile('./data.txt',"Extre content added",(err,data)=>{
//     if(err){
//         console.log("err")
//     }
//     console.log("appended successfully")
// })
// fs.unlink('./data.txt',(err)=>{
//     if(err){
//         console.log("err")
//     }
//     console.log("unlink successfully")
// })*/
//console.log("first")
//setTimeout(() => {
    //console.log("delayed")
//},2000)
//fs.writeFile('./data.txt',"New content added",(err)=>{
   // if(err){
      //  console.log("second")
    //}
    //console.log("File created successfully")
//})
//console.log("third")
//const http=require("http")
     //const server=http.createServer((req,res)=>{
     //res.write("hello server")
     //res.end()
     //console.log(req)
 //})
  //server.listen(3000,()=>{
  //console.log("server is running")
 //})
//console.log("nodemon starting ")
//const express=require('express')
//const app=express()
// 
//const route1=((req,res,next)=>{
    if(50<1){
        console.log("execution")
        next()
    }
    else{
        console.log("invalid user")
    }

/*})
const route2=((req,res,next)=>{
    console.log("route2")
next()  
})
app.get('/',(Req,res)=>{
    res.send("route started")
})
app.get('/home',(req,res)=>{
    res.send("it is a home pge")*/
//})
//app.get('/home',(req,res)=>{
    //res.send("it is a home pge")
//})
//app.get('/vasavi',(req,res)=>{
  //  res.send("im vasavi")
//})
//app.get('/vemu',(req,res  )=>{
    //res.send("vemu institute of technology")

//})
//app.listen(3000,()=>{
    //console.log("epress starts ")

//})
const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/ai')
.then(()=>console.log("mongodb connected"))

const Users=mongoose.model('students',{
    name:String,
    roll:Number
})
app.get('/getures',async (req,res)=>{
    
    res.send(await Users.find() )

})

app.listen(3000,()=>{
    console.log("server is running")
})