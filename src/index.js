const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CustomerManager API' });
});

// Customer routes (placeholder)
app.get('/api/customers', (req, res) => {
  res.json({ customers: [] });
});

app.post('/api/customers', (req, res) => {
  res.status(201).json({ message: 'Customer created' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
