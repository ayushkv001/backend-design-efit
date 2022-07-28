const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/evolvFit",{
    useNewUrlParser: true
},()=>{
    console.log("database connected")
})
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(err)=>{
    console.log(err)
})

const Food = require('./schema/food')
const Meal = require('./schema/meal')
const User = require('./schema/user')





app.listen(5000,()=>{
    console.log("listening at 5000")
})