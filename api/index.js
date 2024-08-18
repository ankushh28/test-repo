const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to return the JSON request body
app.post('/success', (req, res) => {
    res.json(req.body);
});

// GET route to return a "Hey" message
app.get('/', (req, res) => {
    res.send('Hey');
});

// Start the server (Note: This line is optional in Vercel's serverless environment)
module.exports = app;