const express = require("express");
const routes = express.Router();
const Router = require("../contolers/auth-controllers");

// routes.get("/", (req, res) => {
//   res.status(200).send("helo to the routes page...");
// });
// routes.route("/").get((req, res) => {
//   res.status(200).send("helo to the routes page.....");
// });

// home page route
routes.route("/").post(Router.home);
// register page route
routes.route("/register").post(Router.register);
module.exports = routes;
routes.route("/working").get(Router.working);
