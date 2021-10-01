const express = require("express");

const router = express.Router();

const Check = require("../models/check.models.js");

router.post("",async(req,res) =>{
   const cart = await Check.create(req.body);

     return res.status(200).send({cart});
 })


router.get("/add", async(req, res) => {
   
  var check= await Check.find({}).lean().exec()

  res.render("checkout.hbs",{check:check})
  });





module.exports = router;