const express=require("express");
const path=require("path")
const app=express();
//const fs=require("fs");
const port=333;

//EXPRESS SPECIFIC STUFF
//serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// set the template engine as pug

app.set('view engine','pug');

//PUG Specific Stuf
//set the view directory
app.set('views',path.join(__dirname,'views'));


//END POINTS
app.get('/',(req,res)=>{
     
   // const con="This is the best content on website";
    const params={};
    res.status(200).render('home.pug',params)    // render for template and not send
});

app.get('/contact',(req,res)=>{
     
    // const con="This is the best content on website";
     const params={};
     res.status(200).render('contact.pug',params)    // render for template and not send
 })
 


//Start the server
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});