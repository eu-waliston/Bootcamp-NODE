const fs = require("fs");
require("dotenv").config();
const https = require("https");
const express = require("express");
const helmet = require('helmet');

const root = require("./routes/root.router");

const app = express();

const config = {
  CLIENT_ID:  process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};

//middlewares
app.use(helmet());


app.use("/", root);

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(process.env.PORT, () => {
    console.log(`Server runing on PORT ${process.env.PORT}`);
  });
