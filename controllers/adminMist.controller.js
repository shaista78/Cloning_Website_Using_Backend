const express = require('express');

const admin = require('../models/adminMist');
//const users = require('../src/models/signup');
const router = express.Router();


router.post("/",async(req,res)=>{
   const product = await admin.create(req.body);
    res.render('adminMists')
});


module.exports = router;
