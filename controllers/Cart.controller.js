const Cart = require('../models/newCart.model');
const express = require('express');
const mist = require('../models/adminMist')
const mongoose = require('mongoose');
const { findById } = require('../models/adminMist');
const deodrants = require('../models/deodrands.models');
const cream = require('../models/creams.models');

const router = express.Router();


router.get('/add-to-cart/:id', async function(req,res) {
     var id = req.params.id;
    var product = await mist.findById(id).lean().exec();
    console.log(product.price)
    Cart.create(product);
    res.redirect('/bodymistwomen')
});



router.get('/add-to-cart1/:id', async function(req,res) {
    var id = req.params.id;
   var product = await deodrants.findById(id).lean().exec();
  // console.log(product.price)
   Cart.create(product);
   res.redirect('/deodrants')
});





module.exports = router;

