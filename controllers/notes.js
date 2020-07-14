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
