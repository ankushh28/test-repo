const express = require('express');
const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/success', (req, res) => {
  const headers = req.headers;
  const payload = req.body; // Now req.body will contain the parsed URL-encoded data

  console.log('Received PayU webhook:', payload);
  console.log('Headers:', headers);
  
  res.status(200).send('Webhook received successfully');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
