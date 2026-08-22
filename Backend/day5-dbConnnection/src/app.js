const express = require("express");
const mongoose = require("mongoose");
const connectDb = require("./config/db");
const app = express();

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
