const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    }
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;