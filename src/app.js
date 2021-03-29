//this is the web server initialization file
//import required libraries and instansiate express app
const express = require('express')
const path = require('path')
require('dotenv').config({path: __dirname + '/.env'})
const app = express()
app.use(express.json());

require('./db/mongoose')//We dont want to grab anything, just wanted to make sure it runs


//declare which port to use, normally a port will be provided by hosting service.
//if no hosting service provides port, use port 3000
const port = process.env.PORT || 3000

//declares express public directory path and tells the app to use that path to serve up static assets such as html
const publicDirPath = path.join(__dirname, '../public')

// // Express bellow v4.16.0
// // ----------------------
// const bodyParser = require('body-parser');

// app.use(body.json());
// app.use(express.urlencoded({
//   extended: true
// }));

app.use(express.static(publicDirPath))


//index endpoint
app.get('' , (req,res)=>{
    res.render("../public/index.html")
})

//email send endpoint
app.post('/sendEmail' ,(req,res)=>{
    console.log(typeof req)

    //send object to api
    if(req.body.name == 'jack'){
        console.log('reached')
        res.status(500).send({
            error : 'jack bad'
        })

        return
    }

    //everything goes well, send back json response without error 
    res.status(200).json({think : "good"})
    
})

//The 404 Route (ALWAYS Keep this as the last route)

app.get('*', function(req, res){
    res.status(404).sendFile(`${publicDirPath}/404.html`);
  });

//start the web server and listen on port
app.listen(port , ()=>{
    console.log("Server up and running at port " + port)
    console.log("If you are developing on localhost, type localhost:" + 3000 + " in your browser to access the app")
})