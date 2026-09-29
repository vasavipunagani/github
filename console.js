 const express = require("express");
 
 const application = express();
 const port = 4000;
 
 application.get('/',(req,res)=>{
    console.log("Hello world!printed in server console");
    res.send('check the server console');
});
application.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});