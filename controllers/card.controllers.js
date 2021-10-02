const express = require("express");

const router = express.Router();

const Card = require("../models/card.models.js");

router.post("",async(req,res) =>{
   const cart = await Card.create(req.body);

     return res.status(200).send({cart});
 })


router.get("", async(req, res) => {
   
  var card= await Card.find({}).lean().exec()

  res.render("card.hbs",{card:card})
  });





module.exports = router;