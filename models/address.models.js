const mongoose = require('mongoose');





const productsSchema = new mongoose.Schema({
    name:{type:String, required:true},
    pincode:{type:Number,required:true},
    address:{type:String,required:true},
    landmark:{type:String, required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    mobile:{type:String,required:true}
  
  
    
}, {

timestamps: true});


const Products = mongoose.model('address',productsSchema)
module.exports = Products;



