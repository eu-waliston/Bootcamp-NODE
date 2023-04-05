const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const fs = require('fs');

const planetsRouter = require("./routes/planets/planets.router");

const launchesRouter = require("./routes/launches/launches.router");

const app = express();

//create a write stream (in apppend mode)
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a'})

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined', {stream: accessLogStream}));


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

module.exports = app;

