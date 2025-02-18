const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
// here we can bcrypt the password
UserSchema.pre("save", async function (next) {
  console.log("pre model", this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user.password, saltRound);
    user.password = hashpass;
    console.log("after hash", this);
  } catch (error) {
    error.message;
  }
});
const User = new mongoose.model("User", UserSchema);
module.exports = User;
