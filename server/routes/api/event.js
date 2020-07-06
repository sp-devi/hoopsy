// add user models
// Basic user Information

const express = require('express');
const router = express.Router();

const Event = require('../../models/Event');

router.get('/id', function (req, res) {
    // console.log(res);
    // res.send('Home');
    Event.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({
            noEventsFound: "no events"
        }));
});

module.exports = router;