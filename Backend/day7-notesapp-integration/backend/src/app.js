const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRouter = require("./routes/notes.route");
const app = express();
connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {
  res.send("Notes api is running");
});

app.use("/notes", notesRouter);

module.exports = app;
