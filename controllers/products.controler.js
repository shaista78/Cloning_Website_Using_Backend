const express = require("express");

const router = express.Router();
const User = require("../models/products.model")

router.post("/",async(req,res)=>{
    const user = await User.create(req.body)
    return res.status(201).send({user});
    
})


// router.get('/display', async (req,res)=>{
     
//     const user = await admin.find({}).lean().exec();
//     console.log(user)

//     res.render('adminDisplay',{userlist : user})
         
// });

router.get("/",async(req,res)=>{
    const user = await User.find({}).lean().exec();
    res.render('perfumes',{userlist : user})
    //return res.status(201).send({user});
})

module.exports=router;

