const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name :{type:String,required:true},
    image :{type:String,required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true}
},
{
    timestamps:true
});

const creams = mongoose.model("creams",productsSchema)
module.exports = creams;