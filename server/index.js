//model
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routes = require('./routes/auth')
const bodyParser = require('body-parser')

//config enviroment
dotenv.config()

//connect database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(()=> console.log('connected mongoose'))
    .catch(()=>console.log('faild to connect'))

//create app
const app = new express()

//config middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
//routes
app.use('/api/auth' ,routes)

const PORT =process.env.PORT || 5000
//run server
app.listen(5000 , () => console.log(`listening port ${PORT}`))