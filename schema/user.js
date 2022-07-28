const mongoose = require('mongoose')
const Schema = mongoose.Schema
import Meal from './meal';

const user = new mongoose.Schema({
    
    name:String,
    caloryRequirements:Number,
    mealPlans:[{
        date : Date,
        type: Schema.Types.ObjectId,
        ref:'Meal'
    }],
})

const User = new mongoose.model("users",user)

module.exports = User;