const mongoose = require('mongoose');

const userPolicySchema = new mongoose.Schema({
    policyNumber: {
        type: String,
        trim: true
    },
    policyStartDate: {
        type: String,
        trim: true
    },
    policyEndDate: {
        type: String,
        trim: true
    },
    policyCatagory: {
        type: String,
        trim: true
    },
    collectionId: {
        type: String,
        trim: true
    },
    companyCollectionId: {
        type: String,
        trim: true
    },
    userId: {
        type: String,
        trim: true
    }
});

const UserPolicy = mongoose.model('UserPolicy', userPolicySchema);

module.exports = UserPolicy;