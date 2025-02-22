const mongoose = require("mongoose");
// require("dotenv").config();

const URL = process.env.MONGO_URL;
// mongodb://127.0.0.1:27017/mern_Admin
const ConnectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log(" Connected to MongoDB Atlas");
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
