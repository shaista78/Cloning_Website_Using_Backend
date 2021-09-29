const express = require('express');
const connect = require('./configs/db');
const app = express();
app.use(express.json());

app.set('view engine', 'hbs');

app.get("/sign", (req, res) => {
    res.render('signup')
});

app.get("", (req, res) => {
    res.render('home')
});





app.listen(3000,async()  =>{
    await connect();

    console.log("connected to DB and running on port 3000");
})