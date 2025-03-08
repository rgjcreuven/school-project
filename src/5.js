// Create a new express server
const express = require('express');
const app = express();

// Set the port number
const port = 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
