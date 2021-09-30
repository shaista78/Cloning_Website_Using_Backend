const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connect = require('./configs/db');
const register = require('./models/signup.models');



const product = require('./controllers/admin.controller');


//const Products = require('./models/admin');

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

app.use('/post-product',product);

app.use('/admin',product)



//app.use('/new',product);

app.get('/signup.hbs', (req, res)=>{
    res.render('signup')
})
 app.get('/address.hbs', (req,res)=>{
     res.render('address')
 })

 app.get('/AfterLogin.hbs', (req,res)=>{
     res.render('AfterLogin')
 })

 app.get('/body_mist_women.hbs',(req,res)=>{
     res.render('body_mist_women')
 })

 app.get('/admin_Main_Page.hbs',(req,res)=>{
     res.render('admin_Main_Page');
 })



 

 app.get('/admin.hbs', (req,res)=>{
     res.render('admin')
 })


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



//sub categories 2
app.get('/perfumes_men',(req,res)=>{
    res.render('perfumes_men')
})

app.get('/aftershaves.hbs',(req,res)=>{
    res.render('aftershaves')
})

app.get('/colognes.hbs',(req,res)=>{
    res.render('colognes')
})

app.get('/deodarants_men.hbs',(req,res)=>{
    res.render('deodarants_men')
})

//sub category 1

app.get('/perfume_creamed_women.hbs',(req,res)=>{
    res.render('perfume_creamed_women')
})

app.get('/body_mist_women.hbs',(req,res)=>{
    res.render('body_mist_women')
})

app.get('/deodorants_roll_women.hbs',(req,res)=>{
    res.render('deodorants_roll_women')
})

app.get('/perfumes_women.hbs',(req,res)=>{
    res.render('perfumes_women')
})










app.listen(3000, async() =>{
    await connect();

    console.log("Connected to DB and Running on port 3000")
})