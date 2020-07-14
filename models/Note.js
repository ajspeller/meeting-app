const mongoose = require('mongoose');
const { Schema } = mongoose;

const memberNameValidator = [
  function (val) {
    return val.length > 0 && val !== '(Select Name)';
  },
  // custom error text
  'Select a valid member name',
];

const NoteSchema = new Schema({
  memberName: {
    type: String,
    validate: memberNameValidator,
  },
  project: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  workYesterday: {
    type: String,
    required: true,
  },
  workToday: {
    type: String,
    required: true,
  },
  impediment: {
    type: String,
    required: true,
    default: 'none',
  },
});

module.exports = mongoose.model('Note', NoteSchema, 'notes');
