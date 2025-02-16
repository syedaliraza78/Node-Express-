const express = require("express");
const app = express();
const routes = require("./routers/auth-router");
const Connection = require("./utils/dbconnection"); // Ensure this function is properly implemented
const PORT = 5001;

app.use(express.json());
app.use("/api/auth", routes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to server side");
});

app.get("/register", (req, res) => {
  res.status(200).send("Conntected with the Register page");
});
Connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
