const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
        trim: true
    },
    address: {
        address: {
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
        }
    },
    phoneNumber: { 
        type: Number 
    },
    email: {
        type: String,
        trim: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Email is invalid');
            }
        }
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    userType: {
        type: String,
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;