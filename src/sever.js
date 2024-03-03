const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "localhost";

// Template engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("sample");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
