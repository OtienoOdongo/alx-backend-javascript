const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, records) => {
    if (err) reject(new Error('Cannot load the database'));
    else {
      const lines = records.split('\n');
      const csList = [];
      const sweList = [];

      lines.forEach((record) => {
        const fields = record.split(',');
        if (fields.length > 0 && fields !== null) {
          if (fields[3] === 'CS') {
            csList.push(fields[0]);
          } else if (fields[3] === 'SWE') {
            sweList.push(fields[0]);
          }
        }
      });

      let str = `Number of students: ${csList.length + sweList.length}\n`;
      str += `Number of students in CS: ${csList.length}. List: ${csList.join(', ')}\n`;
      str += `Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`;
      resolve(str);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  const database = process.argv.length > 2 ? process.argv[2] : '';
  try {
    const content = await countStudents(database);
    res.write(content);
  } catch (err) {
    res.write(err.message);
  }
  res.end();
});

app.listen(port);

module.exports = app;
