require("dotenv").config();

const express = require("express");
const path = require("path");
const webRouter = require("./routes/web");
const configViewEngine = require("./config/viewEngine");

const app = express(); //app express
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "localhost";

// cònig templete engine
configViewEngine(app);

app.use("/", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}`);
});
