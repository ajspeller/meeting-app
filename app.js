require('dotenv').config();
require('./database/db');

const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
