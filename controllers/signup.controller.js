const express = require('express');
const register = require('../models/signup.models');




const router = express.Router();



router.post("/register",async(req,res)=>{
try{
    const mobile = req.body.mobile;
     const password = req.body.password;
 
 
     if (mobile.length === 10 && password.length >= 8) {
         const product = await register.create(req.body);
         res.render('signup', {msg: 'success'})
         
 
     
  }else{
      res.send("please enter valid")
  }
} catch (err){
    res.render('login', {title: 'Mobile is already exists*, Login'})
}
   
     
    
 
 }
 
 );
 
 
module.exports = router;