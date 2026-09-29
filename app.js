const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    app.get('/',(req,res)=>res.send('Home Page'));
    app.get('/about',(req,res)=>res.send('About Us'));
    app.get('/contact',(req,res)=>res.send('Contact Page'))

    res.send("Hello, world!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});