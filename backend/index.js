const express = require("express");
const app = express();
const routes = require("./routers/auth-router");
const PORT = 5000;

app.use("/api/auth", routes);

app.get("/", (req, res) => {
  res.status(200).send("Wolcome to servers side ");
});

app.listen(PORT, () => {
  console.log(`You are listing on port ${PORT} `);
});
