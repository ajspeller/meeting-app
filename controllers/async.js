const async = require('async');

const Note = require('../models/Note');
const User = require('../models/User');

exports.homepage = (req, res, next) => {
  // gather all notes and users
  async.parallel(
    [
      (cb) => {
        // Notes
        const query = Note.find({});
        query
          .sort({ createdOn: 'desc' })
          .limit(12)
          .exec((err, notes) => {
            cb(err, notes);
          });
      },
      (cb) => {
        // Users
        const query = User.find({});
        query.sort({ username: 1 }).exec((err, users) => {
          cb(err, users);
        });
      },
    ],
    (err, results) => {
      if (err) {
        console.log('error: ', error);
      } else {
        const [notes, users] = results;
        res.render('index', {
          notes,
          users,
        });
      }
    }
  );
};
