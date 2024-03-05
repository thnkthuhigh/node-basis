require("dotenv").config();

const express = require("express");
const path = require("path");
const webRouter = require("./routes/web");
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database");

const app = express(); //app express
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "localhost";

// cònig templete engine
configViewEngine(app);

app.use("/", webRouter);
// connection.query("SELECT * FROM Users", function (err, results, fields) {
//   console.log("Query results:", results); // results contains rows returned by server
//   console.log("Query fields:", fields);

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
