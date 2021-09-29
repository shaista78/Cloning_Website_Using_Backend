const  express = require('express');
const router = express.Router();

 const users = require('../models/signup');

router.post('', async (req, res) =>{
    // const mobile = req.body.mobile;
const deatils = users.create(req.body);
    // const password = req.body.password;

    // if(mobile.length  === 10 && password.length >= 8){
    //     const register = new Register({
    //         mobile: req.body.mobile,
    //         password: req.body.password
    //     })
    // }
    //const registerd = await register.save();
    res.status(200).send({details})

});



 module.exports = router;

