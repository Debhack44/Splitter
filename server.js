const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Your bot API endpoint (replace with actual bot server URL)
const BOT_API_URL = process.env.BOT_API_URL || 'http://localhost:3000';

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Serve the filter page
app.get('/filter/:chatId', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Proxy API requests to bot server
app.get('/api/data/:chatId', async (req, res) => {
  try {
    const response = await fetch(`${BOT_API_URL}/api/data/${req.params.chatId}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`🌐 Web app running on port ${PORT}`);
  console.log(`📍 Access at: http://localhost:${PORT}/filter/{chatId}`);
});
