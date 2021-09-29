const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connect = require('./configs/db');

const product = require('./controllers/admin.controller');


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


app.get('/signup.hbs', (req,res)=>{
    res.render('signup')
    
});

app.use('/post-product',product);



app.get('/AfterLogin.hbs', (req,res)=>{
    res.render('AfterLogin')
})

app.get('/body_mist_women.hbs',(req,res)=>{
    res.render('body_mist_women')
})

app.get('/card.hbs',(req,res)=>{
    res.render('card');
})

app.get('/admin', (req,res)=>{
    res.render('admin')
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