const express = require('express')
const dotenv = require('dotenv')
dotenv.config()


const app = new express()


const PORT =process.env.PORT || 5000
app.listen(5000 , () => console.log(`listening port ${PORT}`))