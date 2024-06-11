const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi.....");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`);
});
