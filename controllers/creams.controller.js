const express = require("express");

const router = express.Router();

const mists = require("../models/adminMist")


router.get("/",async(req,res)=>{
    const user = await mists.find({}).lean().exec();
    res.render('perfume_creamed_women.hbs',{title:"creams",userlist : user})
    //return res.status(201).send({user});
})

module.exports=router;

