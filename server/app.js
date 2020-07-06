const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

connectDB();

// cors
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json({
    extended: false
}));

var event = require('./routes/api/event.js');
app.use('/api/event', event);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on ${port}`));