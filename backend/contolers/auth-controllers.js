const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../Schema/user.schema");
const home = (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .send({ message: "You are on the Router home page", data: req.body });
  } catch (error) {
    res.status(400).send({ error: error.message, message: "Home page error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const UserExist = await User.findOne({ email: email });
    if (UserExist) {
      return res.status(400).json({ message: "User already found" });
    }
    // here we can hash the password by using bcrypt method
    // const saltRound = 10;
    // const psshash = await bcrypt.hash(password, 10);
    const usercreate = await User.create({
      username,
      email,
      password,
    });
    console.log(usercreate);

    res.status(200).json({
      message: "Your form is registered",
      msg: usercreate,
    });
  } catch (error) {
    res.status(400).send({ error: error.message, message: "Register error" });
  }
};

const working = (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .send({ message: "You are on the register state", data: req.body });
    console.log("working with Get commend");
  } catch (error) {
    res.status(400).send({ error: error.message, message: "Register error" });
  }
};

module.exports = { register, home, working };
