const mongoose = require("mongoose");

const check = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    rating:{type:Number,required:false},
    price:{type:Number,required:true}
})

module.exports = mongoose.model("check",check)