const express = require('express');

const users = require('../models/admin');
const router = express.Router();


router.post("/",async(req,res)=>{
    const product = await users.create(req.body);
    res.render('admin')
});

module.exports = router;