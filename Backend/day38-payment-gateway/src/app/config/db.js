import config from "./config.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;