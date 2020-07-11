const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

connectDB();

// cors support
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json({
    extended: false
}));

// Event(BBall events)
var sportEvent = require('./routes/api/sportEvent.js');
app.use('/api/sportEvent', sportEvent);

// Port(Leave 8082 for now)
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on ${port}`));