const express = require('express');
const router = express.Router();
const car = require('../models/newCart.model');






const address = require('../models/address.models');

router.get("/",async(req,res)=>{
    const user = await address.find({}).lean().exec();
    const product = await car.find({}).lean().exec();
    var total =0;
    product.forEach(data =>{
         total = total + data.price;
    })
    console.log(total)
  




    res.render('address.hbs',{userlist : user,tot:total})
    //return res.status(201).send({user});
})


router.post("/",async(req,res) => {
    const add = await address.create(req.body);

    // return res.status(200);

    // const address = await address({Name: req.body.name,pinecode:req.body.pinecode,Address:req.body.add,Landmark:req.body.Landmark,city:req.body.city,state:req.body.state,Mobile:req.body.mobile})
    //  address.save(function(err) {
    //     if(err){
    //         console.log("Something went wrong");
    //     }
    //     else{
    //         console.log("Successfully added a user");
    //         res.redirect("/checkout.hbs");
    //     }
    //  });
})




module.exports = router;
