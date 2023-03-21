const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

let whitelist = ['https://locahost:3000']

let corsOption = {
    origin: function(origin, callback) {
        if(whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not Allowed by CORS'))
        }
    }
}

const app = express();

app.use(cors(corsOption));
app.use(express.json());
app.use(planetsRouter);


module.exports = app;

