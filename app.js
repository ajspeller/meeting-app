require('dotenv').config();
require('./database/db');

const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const swig = require('swig');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const routes = require('./routes/index');

// logging
app.use(morgan('dev'));

// view engine
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes - must come after body parser
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server listening on port: ', PORT);
});
