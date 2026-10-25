// Server Locale Zero-Dipendenze per uso Offline via Hotspot Windows (PC + Smartphone)
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath);
  const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }[ext] || 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File non trovato');
    } else {
      res.writeHead(200, { 'Content-Type': mime + '; charset=utf-8' });
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('====================================================');
  console.log(' MeetCloud & LAN Studio v2 (PC + Smartphone)');
  console.log('====================================================');
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        console.log(` -> Apri su PC o Smartphone: http://${net.address}:${PORT}`);
      }
    }
  }
});