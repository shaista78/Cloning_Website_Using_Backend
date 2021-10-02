const express = require('express');

const admin = require('../models/adminMist');
//const users = require('../src/models/signup');
const router = express.Router();


router.post("/",async(req,res)=>{
   const product = await admin.create(req.body);
    res.render('adminMists')
});

router.get("/",async(req,res)=>{
    const user = await admin.find({}).lean().exec();
    res.render('body_mist_women',{userlist : user})
    //return res.status(201).send({user});
})

module.exports = router;
