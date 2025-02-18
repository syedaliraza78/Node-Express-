require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routers/auth-router");
const ConnectDB = require("./utils/dbconnection");
const PORT = 5001;

app.use(express.json());
app.use("/api/auth", routes);

// Default Routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server");
});

// Connect to DB and Start Server
ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(" Database connection failed:", error);
  });
