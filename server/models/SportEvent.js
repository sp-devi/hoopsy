const mongoose = require('mongoose');

const SportEventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    cityName: {
        type: String,
        required: true
    },
    eventAddress: {
        type: String,
        required: true
    }
});

module.exports = SportEvent = mongoose.model('sportEvent', SportEventSchema);