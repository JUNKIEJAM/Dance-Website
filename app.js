const express=require("express");
const path=require("path")
const app=express();
//const fs=require("fs");
var port=process.env.PORT||333;
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


//define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
    
    
  });

  var Contact = mongoose.model('Contact', contactSchema );

//EXPRESS SPECIFIC STUFF
//serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded());
//app.use(bodyParser.urlencoded());

//app.use(bodyParser.json());

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
 
 app.post('/contact',(req,res)=>{
     
    var myData=new Contact(req.body);
    myData.save().then(()=>{    //asynchronous
           res.send("This item has been saved in the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database");
    });

   // res.status(200).render('contact.pug')    // render for template and not send
 })
 


//Start the server
app.listen(port,()=>{
    console.log(`This application started successfully on port ${port}`);
});