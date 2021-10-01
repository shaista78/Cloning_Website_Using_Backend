const express = require("express");

const router = express.Router();

const deodran = require("../models/deodrands.models")


router.get("/",async(req,res)=>{
    const user = await deodran.find({}).lean().exec();
    res.render('deodorants_roll_women.hbs',{userlist : user})
    //return res.status(201).send({user});
})

module.exports=router;

