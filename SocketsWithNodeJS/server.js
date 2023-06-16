const server = require("http").createServer();
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

let readyPlayerCount = 0;

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("ready", () => {
    console.log("Player ready", socket.id);

    readyPlayerCount++;

    if (readyPlayerCount === 2) {
      io.emit("startGame", socket.id);
    }
  });

  socket.on("paddleMove", (paddleData) => {
    socket.broadcast.emit('paddleMove', paddleData)
  });
});

/*
  As vezes no silêncio da noite
  Eu fico imaginando nós dois
*/
