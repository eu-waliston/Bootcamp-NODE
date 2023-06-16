const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const PORT = 3000;

server.listen(PORT);
console.log(`Listen on PORT ${PORT}`);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
})

/*
  As vezes no silêncio da noite
  Eu fico imaginando nós dois
*/