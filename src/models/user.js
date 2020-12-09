const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    userType: {
        type: String,
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;