const express = require('express');
const app = express();
const helmet = require('helmet'); // Helmet Middleware
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// Creating Authentication middleware
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.sendFile(__dirname + '/home.html'); // Send the home.html file
  }
};

// Middleware for using logging requests
app.use((req, res, next) => {
  console.log(`request: ${req.method} ${req.url}`);

  // Modify the request or response objects
  req.customProperty = 'Some Value';

  next(); // Move to the next middleware or route handler
});

// Use helmet Middleware (it enhances security)
app.use(helmet());

// Use Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/json-example', (req, res) => {
  res.send(req.body); // Send back the parsed JSON data
});

app.post('/url-encoded-example', (req, res) => {
  res.send(req.body); // Send back the parsed URL-encoded data
});

// Protected route using isAuthenticated middleware
app.get('/protected-route', isAuthenticated, (req, res) => {
  res.send('This is a protected route');
});

// Handle non-existent protected routes by redirecting to home.html
app.use('/protected-route', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // Send the home.html file
    // req.redirect('/home.html');
  });

// Serve static files from 'server' directory
app.use(express.static('server'));

app.get('/', (req, res) => {
  res.send('hello worldsssss');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

// Error handling middleware (this should be placed at the end)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
