const express = require("express");
const connectDB = require("./config/db");
const notesRouter = require("./routes/notes.route");
const NotesModel = require("./models/notes.model");
const app = express();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Notes api is running");
});

app.use("/notes", notesRouter);


module.exports = app;
