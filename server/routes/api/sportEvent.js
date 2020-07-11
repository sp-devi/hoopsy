// add user models
// Basic user Information

const express = require('express');
const router = express.Router();

const Event = require('../../models/SportEvent');

router.get('/:id', function (req, res) {
    Event.find()
        .then(sportEvents => res.json(sportEvents))
        .catch(err => res.status(404).json({
            noEventsFound: "no sport events"
        }));
});


router.get('/', function (req, res) {
    Event.find()
        .then(sportEvents => res.json(sportEvents))
        .catch(err => res.status(404).json({
            noEventsFound: "no sport events"
        }));
});


module.exports = router;