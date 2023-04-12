const express = require("express");

const server = express();

function delay(duration) {
    const startTime = Date.now();

    while(Date.now() - startTime < duration) {

    }
}

server.get("/", (req,res) => {
    res.send("Permormance example")
})

server.get("/timer", (req,res) => {
    delay(9000);
    res.send("Ding ding ding");
})



server.listen(3000);