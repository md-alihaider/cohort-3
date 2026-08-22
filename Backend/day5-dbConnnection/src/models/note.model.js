const mongoose = require("mongoose");

// Schema for notes
let notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 10,
  },
}, {
  timestamps: true,
});

// Model for notes
const NotesModel = mongoose.model("notes", notesSchema);
// Export model
module.exports = NotesModel;
