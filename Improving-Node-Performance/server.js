const express = require("express");
const cluster = require("cluster");

const server = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {}
}

server.get("/", (req, res) => {
  res.send(`Permormance example: ${process.pid}`);
});

server.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log("Running sever.js");

if (cluster.isMaster) {
  console.log("Master has been started....");
  cluster.fork();
  cluster.fork();
} else {

  console.log("Worker process started.");
  server.listen(3000);
}
