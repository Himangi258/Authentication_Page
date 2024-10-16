const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (your frontend) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Example API route for authentication
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Here you would check credentials (e.g., against a database)
  if (username === 'user' && password === 'password') {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
