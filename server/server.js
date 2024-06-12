const express = require("express");
const dotenv = require("dotenv");
const mongodbConnection = require("./db/mongoConnection");
dotenv.config();

//Routers
const authRouter = require("./routes/auth.routes.js");

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

app.use("/", (req, res) => {
  res.send("Hi.....");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  mongodbConnection();
  console.log(`The app is running on http://localhost:${PORT}`);
});
