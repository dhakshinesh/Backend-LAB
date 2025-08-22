const http = require('http');
const fs = require('fs');
const path = require('path'); 

const PORT = 3000; ///Error Occured : Unhandled 'error' event, occurs when port is already open
const FILE_TO_SERVE = 'file.txt'; 

fs.writeFileSync(FILE_TO_SERVE, 'This is the content of file.txt', 'utf8');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, FILE_TO_SERVE);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error: Could not read file.');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Open http://localhost:${PORT}/ to see the content of ${FILE_TO_SERVE}`);
});