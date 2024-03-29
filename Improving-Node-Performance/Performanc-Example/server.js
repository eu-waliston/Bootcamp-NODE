const express = require("express");

const server = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {}
}

server.get("/", (req, res) => {
  res.send(`Permormance example: ${process.pid}`);
});

server.get("/timer", (req, res) => {
  delay(4000);
  res.send(`Beep beep beep! ${process.pid}`);
});


console.log("Master has been started....");
console.log("Worker process started.");
server.listen(3000);
