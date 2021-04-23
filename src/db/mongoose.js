//this is the database initialization file
//import required libs
const mongoose = require('mongoose')
require('dotenv').config();

const dbName = process.env.MONGODB_URL

//connect to db
mongoose.connect(dbName, {
    useNewUrlParser : true,
    useCreateIndex : true,
})
.then((data)=>{
    console.log("Connection to mongodb successful")
})
.catch((e)=>{
    console.log(e)
})

