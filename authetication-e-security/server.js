const fs = require("fs");
require("dotenv").config();
const https = require("https");
const express = require("express");
const root = require("./routes/root.router");

const app = express();

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
