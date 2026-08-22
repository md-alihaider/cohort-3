const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const NotesModel = require("./models/note.model");
const app = express();
app.use(express.json());
connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create note
app.post("/create", async(req, res) => {
  let { title, description } = req.body;

  // Create note in database
  const newNote = await NotesModel.create({
    title,
    description,
  });
  

  // Send response
  res.send({
    success: true,
    message: "Note created successfully",
    data: newNote,
  });
});

module.exports = app;
