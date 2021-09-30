const mongoose = require("mongoose");


const userCategory = new mongoose.Schema({
    name:{ type:String, required:true },
    price:{ type:Number, required:true },
    rating:{ type:Number, required:true },
    image:{ type:String, required:true },
})

module.exports = mongoose.model("perfumes", userCategory);

