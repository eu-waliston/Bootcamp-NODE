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


app.get('/', (req,res) => {
    res.status(200).json(friends)
})

app.get('/messages', (req,res) => {
    res.status(200).send('<h1>Hello Albert!</h1>')
})

app.get('/friends/:friendID' , (req,res) => {
    const friendID = Number(req.params.friendID);
    const friend = friends[friendID];
    if(friend){
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exists"
        })
    }
})

app.post('/messages', (req,res) => {
    console.log('Updating Messages...');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})