require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
