const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to return the JSON request body
app.post('/success', (req, res) => {
const payload = req.body;
  console.log('Received PayU webhook:', payload);
  res.status(200).send('Webhook received successfully');
  res.status(200).send(payload);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
