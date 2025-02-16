const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/mern_Admin";

const ConnectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Local MongoDB");
  } catch (error) {
    console.error(" Local MongoDB Connection Error:", error.message);
  }
};

module.exports = ConnectDB;
