const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;

// Store bot API URL - update this with your bot server's public URL
const BOT_API_URL = process.env.BOT_API_URL || 'https://destiny-ensuring-packs-advantage.trycloudflare.com';

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
    const response = await axios.get(`${BOT_API_URL}/api/data/${req.params.chatId}`);
    const data = response.data;
    res.json(data);
  } catch (err) {
    console.error('Failed to fetch data:', err.message);
    res.status(500).json({ error: 'Failed to fetch data from bot' });
  }
});

app.listen(PORT, () => {
  console.log(`🌐 Web app running on port ${PORT}`);
  console.log(`📍 Bot API: ${BOT_API_URL}`);
});

module.exports = app;
