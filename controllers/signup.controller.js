const express = require('express');
const register = require('../models/signup.models');




const router = express.Router();



router.post("/register",async(req,res)=>{

   
     const mobile = req.body.mobile;
     const password = req.body.password;
 
 
     if (mobile.length === 10 && password.length >= 8) {
         const product = await register.create(req.body);
         res.render('login')
 
     
  }else{
      res.send("please enter valid")
  }
    
 
 }
 
 );
 

// router.post('/login', async (req, res) => {
//     try {
//         const det = req.body.ida;
//         const cred = req.body.cred;
        
//         const userdetails = await register.findOne({ mobile: det });
//         if (userdetails.password === cred) {
//             res.render('home')
//         } else {
//             res.send("wrong")
//         }
//         // res.send("user not found!")


//     } catch (err) {
//         res.status(400).send("user not found!");
//     }
// })


module.exports = router;