const express = require("express");

const router = express.Router();

const mists = require("../models/adminMist")


router.get("/",async(req,res)=>{
    const user = await mists.find({}).lean().exec();
    res.render('body_mist_women',{userlist : user})
    //return res.status(201).send({user});
})

module.exports=router;

