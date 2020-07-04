const { truncate, truncateSync } = require("fs");

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
    }
});

module.exports = User = mongoose.model('user', UserSchema);