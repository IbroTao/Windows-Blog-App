const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 50,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
},{
    timestamps: true
});

const Users = mongoose.model('users', userSchema);
module.exports = {Users}