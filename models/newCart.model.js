const mongoose = require('mongoose')
const mist = require('./adminMist')

const cartSchema = new mongoose.Schema({

    mist :{type:mongoose.Schema.Types.ObjectId,ref :"mist", required:false},
    image:{type:String,required:true},
    name:{type:String,required:true},
     rating:{type:Number,required:false},
     price:{type:Number,required:true}


})

const Newcart = mongoose.model('cart',cartSchema);
module.exports = Newcart;