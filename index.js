const express = require('express');
const app = express();

app.use(express.json());

app.post('/success', (req, res) => {
    res.json(req.body);
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
