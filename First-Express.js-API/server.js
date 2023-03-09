const express = require("express");

const frindsController = require("./controllers/friends.controller")
const messagesController = require("./controllers/messages.controller");

const app = express();
const PORT = 3000;


//Middlewares
app.use((req, res, next) => {

    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json())


app.post('/friends', frindsController.postFriend)
app.get('/friends', frindsController.getFriends)
app.get('/friends/:friendID',frindsController.getFriend)


app.post('/messages', messagesController.postMessage)
app.get('/messages', messagesController.getMessages)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})