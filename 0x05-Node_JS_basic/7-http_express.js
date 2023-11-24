const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFileName = '/alx-backend-javascript/0x05-Node_JS_basic';

  // Read the content of the CSV file asynchronously
  fs.readFile(databaseFileName, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Split the content into lines
    const lines = data.split('\n');

    // Filter out empty lines
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');

    // Display the non-empty lines in the response
    const result = nonEmptyLines.join('\n');
    res.send(`This is the list of our students:\n${result}`);
  });
});

app.listen(port);

module.exports = app;
