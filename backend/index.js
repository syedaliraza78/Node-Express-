const express = require("express");
const app = express();

const PORT = 5000;
app.get("/", (req, res) => {
  res.status(200).send("Wolcome to servers side ");
});

app.listen(PORT, () => {
  console.log(`You are listing on port ${PORT} `);
});
