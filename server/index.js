//model
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//config enviroment
dotenv.config()

//connect database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(()=> console.log('connected mongoose'))
    .catch(()=>console.log('faild to connect'))

//create app
const app = new express()



const PORT =process.env.PORT || 5000
//run server
app.listen(5000 , () => console.log(`listening port ${PORT}`))