const register = require('../models/signup.models');
const express = require('express');


const router = express.Router();


router.post("", async (req, res) => {
    try {
        //    console.log(req.body.mobile); 
        //    res.send(req.body.mobile)
        const mobile = req.body.mobile;
        const password = req.body.password;



        if (mobile.length === 10 && password.length >= 8) {
            const done = new register({
                mobile: req.body.mobile,
                password: req.body.password
            });

            const registerd = await done.save();
            res.status(200).render("login")
        } else {
            res.send("please enter valid things")
        }

    } catch (err) {
        res.status(500).send(err);
    }
})


router.post('/login', async (req, res) => {
    try {
        const det = req.body.ida;
        const cred = req.body.cred;
        
        const userdetails = await users.findOne({ mobile: det });
        if (userdetails.password === cred) {
            res.render('home')
        } else {
            res.send("wrong")
        }
        // res.send("user not found!")


    } catch (err) {
        res.status(400).send("user not found!");
    }
})


module.exports = router;