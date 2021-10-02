const express = require('express')

const car = require('../models/newCart.model');
const router = express.Router();
const mist = require('../models/adminMist');


router.get('/',async(req,res)=>{

    const product = await car.find({}).populate('mist').lean().exec();

    console.log(product);
    res.render('cart',{item :product})
})

module.exports = router;

