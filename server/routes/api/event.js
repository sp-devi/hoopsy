// add user models
// Basic user Information

const express = require('express');
const router = express.Router();

const Event = require('../../models/Event');

router.get('/id', function (req, res) {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(404).json({
            noEventsFound: "no events"
        }));
});

module.exports = router;