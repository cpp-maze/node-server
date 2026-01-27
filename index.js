const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World via github codespace')
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Server is running on http://localhost:3000')
});
