const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/newnote', notesController.allUsersNotes);

module.exports = router;
