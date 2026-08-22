const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alihaiderbgp85_db_user:lirqV4Q5XrHYR7kI@cluster0.9ry5xxs.mongodb.net/",
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database not connected", error);
  }
};

module.exports = connectDb;