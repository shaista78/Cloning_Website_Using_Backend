const express = require('express');
const connect = require('./configs/db');
const app = express();
app.use(express.json());






app.listen(3000,async()  =>{
    await connect();

    console.log("connected to DB and running on port 3000");
})