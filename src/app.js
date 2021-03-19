const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

app.get('/' , (req,res)=>{
    res.render("../public/index.html")
})

app.listen(port , ()=>{
    console.log("Server up and running at port " + port)
    console.log("If you are developing on localhost, type localhost:" + port + " in your browser to access the app")
})