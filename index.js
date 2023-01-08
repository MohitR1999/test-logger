require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req, res) => {
    const ip = req.socket.remoteAddress;
    console.log(`IP: ${ip}`);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
