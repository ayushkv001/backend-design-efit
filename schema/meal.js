const mongoose = require('mongoose')

const meal = new mongoose.Schema({
    
    category:{
        type:String,
        enum:["Breakfast","Lunch","Evening snack","Dinner"]
    },
    name:String,
    foodItems:[String]
})

const Meal = new mongoose.model("meals",meal)

module.exports = Meal;