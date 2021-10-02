const express = require('express')

const car = require('../models/newCart.model');
const router = express.Router();
const mist = require('../models/adminMist');


router.get('/',async(req,res)=>{

    const product = await car.find({}).lean().exec();
    var total =0;
    product.forEach(data =>{
         total = total + data.price;
    })
  
    
    res.render('cart',{item :product,tot:total})
})

module.exports = router;

