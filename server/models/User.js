const { truncate, truncateSync } = require("fs");
const { Schema } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contacts: {
        phone: {
            type: String,
            required: false
        },
        email: {
            type: String,
            rquired: true
        }
    },
    eventsToAttend: [{
        type: Schema.Types.ObjectId,
        ref: 'sportEvent'
    }],
    eventsAttended: [{
        type: Schema.Types.ObjectId,
        ref: 'sportEvent'
    }],
    eventsToHost: [{
        type: Schema.Types.ObjectId,
        ref: 'sportEvent'
    }],
    eventsHosted: [{
        type: Schema.Types.ObjectId,
        ref: 'sportEvent'
    }],
    eventsCancelled: [{
        type: Schema.Types.ObjectId,
        ref: 'sportEvent'
    }],
});

module.exports = User = mongoose.model('user', UserSchema);