//this is the web server initialization file
//import required libraries and instansiate express app
const express = require('express')
const path = require('path')
require('dotenv').config({path: __dirname + '/.env'})
const app = express()
const email = require('./utils/email.js')


app.use(express.json());

require('./db/mongoose')//We dont want to grab anything, just wanted to make sure it runs


//declare which port to use, normally a port will be provided by hosting service.
//if no hosting service provides port, use port 3000
const port = process.env.PORT || 3000

//declares express public directory path and tells the app to use that path to serve up static assets such as html
const publicDirPath = path.join(__dirname, '../public')


app.use(express.static(publicDirPath))


//index endpoint
app.get('' , (req,res)=>{
    res.render("../public/index.html")
})

//email send endpoint
app.post('/sendEmail' ,(req,res)=>{


      //declare mail options  
      //send from transporter to receiver
      const mailOptions = {
        from: process.env.NODEMAILER_TRANS_EMAIL,
        to: 'jh_ng@ymail.com',//receiver email
        subject: 'Customer enquiry received from ccc2u',
      };

      //declare email metadata
      const mailData = {
          enquiryType: req.body.enquiryType,
          username : req.body.name,
          email : req.body.email,
          subject : req.body.subject,
          message : req.body.message

      }
      

      //send email
      email.sendEmail(mailOptions,mailData, (error, data)=>{
        if(error){
            return res.status(500).send({
                error
            })
        }

        else{
            return res.status(200).send({})
        }
      })



    
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