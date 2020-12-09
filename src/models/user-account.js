const mongoose = require('mongoose');

const userAccountSchema = new mongoose.Schema({
    accountName: {
        type: String,
        trim: true
    }
});

const UserAccount = mongoose.model('UserAccount', userAccountSchema);

module.exports = UserAccount;