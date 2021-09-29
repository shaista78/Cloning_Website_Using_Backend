const express = require('express');
const connect = require('./configs/db');
const register = require('./models/signup');
//const login = require('../views/login');
const users = require('./models/signup');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// const jobs = require('./src/config/models/all-model');
// const allCont = require('./src/config/models/controllelrs/all');

//const sign = require('./models/signup');
//const regis = require('./controllers/users.cont');

app.set('view engine', 'hbs');

app.get("/sign", (req, res) => {
    res.render('signup')
});

app.get("", (req, res) => {
    res.render('home')
});



app.post("/register", async (req, res) => {
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

app.get("/login", (req, res) => {
    res.render('login')
});

//login partials

app.post('/login', async (req, res) => {
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



app.listen(3000, async () => {
    await connect();

    console.log("connected to DB and running on port 3000");
})