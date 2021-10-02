const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name :{type:String,required:false},
    image :{type:String,required:false},
    price:{type:Number,required:false},
    rating:{type:Number,required:false}
});

const creams = mongoose.model("cream",productsSchema)
module.exports = creams;