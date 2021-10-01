const mongoose = require('mongoose');





const productsSchema = new mongoose.Schema({
    mobile :{type:String,required:true, unique:true, index:true, trim:true, autoIndex:true},
    password :{type:String,required:true},
  
    
}, {
//versionKey: false,
timestamps: true});


const Products = mongoose.model('details',productsSchema)
module.exports = Products;