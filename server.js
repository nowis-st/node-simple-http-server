/**
 * Node.js simple HTTP server
 * @author: Simon Nowis <tannai.simon@gmail.com>
 * @license: MIT
 * @todo: Nothing
 */

'use strict';

const express     = require('express');
const helmet      = require('helmet');

const app         = express();
const port        = 5501;

// Use helmet for security
app.use(helmet());

// Define static foler who will contains the Webapp, like Angular.js
app.use(express.static(__dirname + '/webapp'));

app.listen(port, () => {
  console.log('Server run on port', port, 'in', process.env.NODE_ENV, 'mode');
});
