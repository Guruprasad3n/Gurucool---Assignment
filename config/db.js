const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error in Connecting Database");
  }
};

module.exports = connectDB;
