const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
    companyName: {
        type: String,
        trim: true
    }
});

const Carrier = mongoose.model('Carrier', carrierSchema);

module.exports = Carrier;
