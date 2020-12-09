const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
    catagoryName: {
        type: String,
        trim: true
    }
});

const Catagory = mongoose.model('Catagory', catagorySchema);

module.exports = Catagory;