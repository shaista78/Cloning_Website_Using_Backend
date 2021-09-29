const mongoose = require('mongoose');

// const allSchema = mongoose.Schema({
//     title: {type: 'string', required: true},
//     // location: {type: 'string', required: true},
//     location: {type: mongoose.Schema.Types.ObjectId, ref:"locations", required: true},
//     tags :  {type: mongoose.Schema.Types.ObjectId, ref:"works", required: true},
//     skill: {type: mongoose.Schema.Types.ObjectId, ref:"skills", required: true}
// }, {
//     versionKey: false,
//     timestamps: true
// });

const usersSchema = mongoose.Schema({
    mobiles: {type: Number,required:true, unique: true},
    password: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
});

const users = mongoose.model('users', usersSchema);
module.exports = users;