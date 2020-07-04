// add user models
// Basic user Information

const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const { restart } = require('nodemon');

router.get('/test', (req, res) => res.send('book route testing'));

router.get('/', (req, res) => {
    User.find()
        .then(users = res.json(users))
        .catch(err => res.status(404).json({
            noUsersFound: 'No Users'
        }))
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json({
            noUsersFound: 'No User'
        }))
});