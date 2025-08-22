const fs = require('fs');

const outputFilePath = 'file.txt';

const writableStream = fs.createWriteStream(outputFilePath);

writableStream.write('Hello from Node.js streams!\n');
writableStream.write('This is some more content.\n');

writableStream.on('finish', () => {
    console.log('All data has been written to the file.');
});

writableStream.on('error', (err) => {
    console.error('An error occurred during writing:', err);
});

writableStream.end('End of file.');