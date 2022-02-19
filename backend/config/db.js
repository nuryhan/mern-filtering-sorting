const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URl;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Connect Mongodb failed");
    console.log(error);
  }
};

module.exports = connectDB;
