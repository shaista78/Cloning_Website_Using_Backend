const express = require('express');
const register = require('../models/signup.models');

const router = express.Router();
router.post('/login', async (req, res) => {
    try {
        const det = req.body.ida;
        const cred = req.body.cred;
        
        const userdetails = await register.findOne({ mobile: det });
        if (userdetails.password === cred) {
            res.render('AfterLogin')
        } else {
            res.send("wrong")
        }
        // res.send("user not found!")


    } catch (err) {
        res.status(400).send("user not found!");
    }
})


module.exports = router;