//this is the web server initialization file
//import required libraries and instansiate express app
const express = require('express')
const path = require('path')
require('dotenv').config({path: __dirname + '/.env'})
const app = express()

require('./db/mongoose')//We dont want to grab anything, just wanted to make sure it runs


//declare which port to use, normally a port will be provided by hosting service.
//if no hosting service provides port, use port 3000
const port = process.env.PORT || 3000

//declares express public directory path and tells the app to use that path to serve up static assets such as html
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))


//index endpoint
app.get('/' , (req,res)=>{
    res.render("../public/index.html")
}) 


//start the web server and listen on port
app.listen(port , ()=>{
    console.log("Server up and running at port " + port)
    console.log("If you are developing on localhost, type localhost:" + port + " in your browser to access the app")
})