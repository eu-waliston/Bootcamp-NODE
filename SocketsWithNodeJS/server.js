const http = require("http");

const api = require("./api");

const server = http.createServer(api);
const sockets = require("./sockets");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const PORT = 3000;

server.listen(PORT);
console.log(`Listen on PORT ${PORT}`);

sockets.listen(io);
