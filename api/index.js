const express = require('express');
const app = express();


app.use(express.json());




app.post('/success', (req, res) => {
const payload = req.body;
  console.log('Received PayU webhook:', payload);
  res.status(200).send(payload);
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
