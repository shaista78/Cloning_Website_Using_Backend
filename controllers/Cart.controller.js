const Cart = require('../models/newCart.model');
const express = require('express');
const mist = require('../models/adminMist')
const mongoose = require('mongoose');
const { findById } = require('../models/adminMist');

const router = express.Router();


router.get('/add-to-cart/:id', async function(req,res) {
     var id = req.params.id;
    var product = await mist.findById(id).lean().exec();
    console.log(product.name)
    Cart.create(product);
    res.redirect('/bodymistwomen')
});



module.exports = router;

