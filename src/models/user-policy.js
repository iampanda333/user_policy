const mongoose = require('mongoose');

const userPolicySchema = new mongoose.Schema({
    policyNumber: {
        type: String,
        trim: true
    },
    policyStartDate: {
        type: Date,
        trim: true
    },
    policyEndDate: {
        type: Date,
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
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const UserPolicy = mongoose.model('UserPolicy', userPolicySchema);

module.exports = UserPolicy;