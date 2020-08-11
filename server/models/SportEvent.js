const mongoose = require('mongoose');

const SportEventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cityName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateTimeInfo : {
        date : {
            type: String,
            required: true
        },
        timeStart: {
            type: String,
            required: true
        },
        timeEnd: {
            type: String,
            required: false
        }
    }
});

module.exports = SportEvent = mongoose.model('sportEvent', SportEventSchema);