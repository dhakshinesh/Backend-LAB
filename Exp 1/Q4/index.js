const fs = require('fs');

const readableStream = fs.createReadStream('file.txt', { encoding: 'utf8' });

let fileContent = '';

readableStream.on('data', (chunk) => {
  fileContent += chunk;
});

readableStream.on('end', () => {
  console.log('File content:', fileContent);
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});