const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'files', req.url.slice(1)); // Remove a barra inicial da URL
  const contentType = getContentType(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Arquivo não encontrado');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

function getContentType(filePath) {
  const mimeType = mime.lookup(filePath);
  return mimeType || 'application/octet-stream';
}

const port = 3000; // Porta em que o servidor irá rodar
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
