const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const handleRequest = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    handleStudentsRequest(res);
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
};

const handleStudentsRequest = (res) => {
  res.write('This is the list of our students\n');
  students(process.argv[2])
    .then((data) => {
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}
        .List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}
        .List: ${data.sweStudents.join(', ')}`);
      res.end();
    })
    .catch((err) => res.end(err.message));
};

const app = http.createServer(handleRequest);

app.listen(port, hostname);

module.exports = app;

