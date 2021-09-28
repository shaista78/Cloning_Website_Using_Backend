const mongoose = require('mongoose');

module.exports = () =>{
 return mongoose.connect("mongodb+srv://girishv694:8762331996@cluster0.6csmw.mongodb.net/purplle?retryWrites=true&w=majority")
}