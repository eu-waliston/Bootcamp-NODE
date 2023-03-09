const express = require("express");
const app = express();
const PORT = 3000;


app.get('/', (req,res) => {
    res.status(200).send({
        id: 1,
        name: 'Sir Isaac Newton'
    })
})

app.get('/messages', (req,res) => {
    res.status(200).send('<h1>Hello Albert!</h1>')
})

app.post('/messages', (req,res) => {
    console.log('Updating Messages...');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})