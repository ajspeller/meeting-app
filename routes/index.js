const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/newnote', (req, res, next) => {
  res.render('newnote');
});

module.exports = router;
