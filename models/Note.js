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
});

module.exports = mongoose.model('Note', NoteSchema, 'notes');
