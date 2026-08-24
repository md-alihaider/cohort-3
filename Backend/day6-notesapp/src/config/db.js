const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri);
    console.log("Database connected");
  } catch (error) {
    console.log("Error in database connection", error);
  }
};


module.exports = connectDB;