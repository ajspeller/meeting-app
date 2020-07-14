const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  memberName: {
    type: String,
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
    type: Boolean,
  },
  workToday: {
    type: Boolean,
  },
  impediment: {
    type: String,
  },
});

module.exports = mongoose.model('Note', NoteSchema, 'notes');
