const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const SECONDS = 5000;

//check connect
const countConnection = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connection: ${numConnection}`);
};

// check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus();
    const memoryUsage = process.memoryUsage().rss;

    //example 1 core = 5 connections
    const maxConnection = numCores * 5;
    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory used: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnection) {
      console.log("Connection overload");
    }
  }, SECONDS);
};

module.exports = {
  countConnection,
  checkOverload,
};
