const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name :{type:String,required:true},
    email :{type:String,required:true}
});


const Products = mongoose.model('admin',productsSchema)
module.exports = Products;