const mongoose = require('mongoose')

const food = new mongoose.Schema({
    name:String,
    calories:Number,
    protein:Number,
    carb:Number,
    fat:Number,
    acceptedUnits:{
        type:String,
        enum:["ml","kg","g","item","liter"],
        default:"g"
    },
    itemWeight:Number
})

const Food = new mongoose.model("foods",food)

module.exports = Food;