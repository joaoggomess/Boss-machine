const express = require('express');
const app = express();

module.exports = app;

const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

// Middware for parsing request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);


// This conditional is here for testing purposes:
if (!module.parent) { 
 app.listen(PORT, () => {
  console.log(`Server is open on port: ${PORT}`);
 })
};
