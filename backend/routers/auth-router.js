const express = require("express");
const routes = express.Router();

// routes.get("/", (req, res) => {
//   res.status(200).send("helo to the routes page...");
// });
routes.route("/").get((req, res) => {
  res.status(200).send("helo to the routes page.....");
});
module.exports = routes;
