const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => { //Obtained an error : file not found
  if (err) {
    console.error('Error reading file:', err);
    //Approach 2 : Create a file if not it does exist
    return;
  }
  console.log('File content:', data);
});