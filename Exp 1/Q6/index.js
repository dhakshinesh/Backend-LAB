const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');

const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Data successfully piped from input.txt to output.txt');
});

readableStream.on('error', (err) => {
    console.error('Error reading from input.txt:', err);
});

writableStream.on('error', (err) => {
    console.error('Error writing to output.txt:', err);
});

console.log('Piping operation initiated...');