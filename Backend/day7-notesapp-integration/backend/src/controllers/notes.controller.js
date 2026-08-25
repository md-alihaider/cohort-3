const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  //create
  try {
    let { title, description } = req.body;
    let newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

const getAllNotesController = async (req, res) => {
  //read
  try {
    let allNotes = await NotesModel.find();
    return res.status(200).json({
      message: "All notes fetched successfully",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    let note = await NotesModel.findById(noteId);

    return res.status(200).json({
      message: "Single note fetched successfully",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

const updateNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    const updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      //get updated data
      new: true,
    });
    return res.status(200).json({
      message: "Single note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

const singleEntityUpdateController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;
    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true
    })

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    })
  }
}

const deleteNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    const deletedNote = await NotesModel.findByIdAndDelete(noteId);
    return res.status(200).json({
      message: "Single note deleted successfully",
      data: deletedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
}
module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNotesController,
  singleEntityUpdateController
};
