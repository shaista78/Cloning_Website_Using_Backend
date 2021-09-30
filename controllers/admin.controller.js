const express = require('express');

const admin = require('../models/admin');
//const users = require('../src/models/signup');
const router = express.Router();


router.post("/",async(req,res)=>{
   const product = await users.create(req.body);
    res.render('admin')
});


router.get('/display', async (req,res)=>{
     
    const user = await admin.find({}).lean().exec();
    console.log(user)

    res.render('adminDisplay',{userlist : user})
         
});



module.exports = router;