const mongoose = require('mongoose');

// var UserSchema = new mongoose.Schema({
//     mobile : Number,
//     password: String,
// });

// module.exports = mongoose.model('user',UserSchema);

const usersSchema = new mongoose.Schema({
    mobile: {type: Number,required:true, },
    password: {type: String, required: true}
}, {
   
    timestamps: true
});

const users = mongoose.model('users', usersSchema);
module.exports = users;