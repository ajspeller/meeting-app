const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes');
const asyncController = require('../controllers/async');

router.get('/', asyncController.homepage);

router.get('/newnote', notesController.allUsersNotes);
router.post('/newnote', notesController.createNote);

module.exports = router;
