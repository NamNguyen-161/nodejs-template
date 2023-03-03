require("dotenv").config();
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { countConnection, checkOverload } = require("./helpers/check.connect");
countConnection();
// checkOverload();
// init routes
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

// handle error

module.exports = app;
