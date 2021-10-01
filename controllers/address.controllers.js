const express = require('express');
const router = express.Router();


const address = require('../models/address.models');

router.get("/",async(req,res)=>{
    const user = await address.find({}).lean().exec();
    res.render('address.hbs',{userlist : user})
    //return res.status(201).send({user});
})


router.post("/",async(req,res) =>{
    const address = await address({})
})

module.exports=router;