"use strict";

const mongoose = require("mongoose");

const connectUrl = `mongodb://localhost:27017/nodejs`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectUrl)
      .then((_) => console.log("Connect db success"))
      .catch((err) => console.log("Connect db error"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
