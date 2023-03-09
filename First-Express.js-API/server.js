const express = require("express");
const app = express();
const PORT = 3000;
const friends = [
    {
        id: 0,
        name: 'Albert Eisntein',
    },
    {
        id: 1,
        name: 'Isaac Newton',
    }
];

//Middlewares
app.use((req, res, next) => {

    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json())

app.post('/friends', (req, res) => {

    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(newFriend);

    res.json(newFriend);
})

app.get('/', (req, res) => {
    res.status(200).json(friends)
})

app.get('/messages', (req, res) => {
    res.status(200).send('<h1>Hello Albert!</h1>')
})

app.get('/friends/:friendID', (req, res) => {
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exists"
        })
    }
})

app.post('/messages', (req, res) => {
    console.log('Updating Messages...');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})