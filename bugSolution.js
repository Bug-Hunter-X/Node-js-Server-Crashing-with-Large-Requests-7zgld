const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Limit request body size
app.use(bodyParser.json({limit: '50mb'})); // Adjust limit as needed
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.post('/', (req, res) => {
  try {
    console.log('Request body:', req.body);
    res.send('Request received successfully!');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});