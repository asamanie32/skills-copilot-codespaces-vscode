// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Listen for requests
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Run the server
// node comments.js

// Open browser and go to http://localhost:3000
// You should see Hello World! displayed in the browser