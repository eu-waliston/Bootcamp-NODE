const express = require('express');
const path = require('path');


const root = express.Router();

root.get('/secret', (req,res) => {
    res.send('Your personal secret value is 42!')
})

root.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = root;