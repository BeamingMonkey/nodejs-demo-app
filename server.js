const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD Demo App!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', version: process.env.VERSION || '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
