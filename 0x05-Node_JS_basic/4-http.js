// Import the 'http' module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP response status code to 200 (OK)
  res.statusCode = 200;

  // Set the response header to indicate the content type is plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body with the text "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Make the server listen on the specified port and hostname
app.listen(port, hostname);

// Export the 'app' variable for use in other modules
module.exports = app;

