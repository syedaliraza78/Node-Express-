const express = require("express");
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

const register = (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .send({ message: "You are on the register state", data: req.body });
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
  } catch (error) {
    res.status(400).send({ error: error.message, message: "Register error" });
  }
};
module.exports = { register, home, working };
