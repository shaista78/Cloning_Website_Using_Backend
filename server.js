const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connect = require('./configs/db');
const register = require('./src/models/signup');



const Products = require('./models/admin');

const app = express();


//parsing middle wares
//parse application //form json

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//static files
app.use(express.static('public'));

//template engine
//handle-bars

app.engine('hbs',exphbs({extname: '.hbs'}));

app.set('view engine', 'hbs');

//navigation //router

app.get('/', (req,res)=>{
    res.render('home');
});

 
app.use("sign", register);

app.get('/signup', (req,res)=>{
    res.render('signup')
    
});


// 

app.get('/signup.hbs', (req, res)=>{
    res.render('signup')
})
// app.get('/address.hbs', (req,res)=>{
//     res.render('address')
// })

// app.get('/AfterLogin.hbs', (req,res)=>{
//     res.render('AfterLogin')
// })

// app.get('/body_mist_women.hbs',(req,res)=>{
//     res.render('body_mist_women')
// })

// app.get('/card.hbs',(req,res)=>{
//     res.render('card');
// })

// app.post('/register', register)

// app.get('/admin', (req,res)=>{
//     res.render('admin')
// })


app.post("/register", async (req, res) => {
    try {
       
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





app.listen(3000, async() =>{
    await connect();

    console.log("Connected to DB and Running on port 3000")
})