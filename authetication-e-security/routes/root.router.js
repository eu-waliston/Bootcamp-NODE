const express = require('express');
const path = require('path');

const checkLoggedIn = require('../auth/checkLoggedIn');

const root = express.Router();

root.get('/secret', checkLoggedIn, (req,res) => {
    res.send('Your personal secret value is 42!')
})

root.get('/auth/google', (req,res) => {})

root.get('/auth/google/callback', (req,res) => {})

root.get('/auth/logout', (req,res) => {})

root.get('/',  (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = root;