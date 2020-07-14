const Note = require('../models/Note');
const User = require('../models/User');

exports.allUsersNotes = (req, res, next) => {
  User.find({})
    .sort({
      username: 1,
    })
    .exec((err, users) => {
      if (err) {
        console.log('error getting users');
      } else {
        return res.render('newnote', {
          title: 'New Note',
          users,
        });
      }
    });
};

exports.createNote = (req, res, next) => {
  const {
    memberName,
    project,
    workYesterday,
    workToday,
    impediment,
  } = req.body;
  const newNote = new Note({
    memberName,
    project,
    workYesterday,
    workToday,
    impediment,
  });
  newNote.save((err) => {
    if (err) {
      const errMsg = `Sorry, error saving, ${err}`;
      res.render('newnote', {
        title: `Note - new note (error)`,
        message: errMsg,
      });
    } else {
      console.log('Meeting note saved');
      res.redirect(301, '/');
    }
  });
};
