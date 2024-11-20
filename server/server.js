const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('node:path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
