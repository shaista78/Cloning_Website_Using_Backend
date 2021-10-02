const express = require("express");
const car = require('../models/newCart.model');

const router = express.Router();

const Check = require("../models/check.models.js");

router.post("",async(req,res) =>{
   const cart = await Check.create(req.body);


   

     return res.status(200).send({cart});
 })


router.get("/add", async(req, res) => {
   
  var check= await Check.find({}).lean().exec()

  const product = await car.find({}).lean().exec();
    var total =0;
    product.forEach(data =>{
         total = total + data.price;
    })
    console.log(total)

  res.render("checkout.hbs",{check:check,tot:total})
  });





module.exports = router;