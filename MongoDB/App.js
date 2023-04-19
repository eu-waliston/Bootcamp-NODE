const express = require("express");
require("dotenv").config();
const rootRouter = require("./src/routes/root");

const App = express();

App.use("/", rootRouter);

require("./src/config/database.js");

App.listen(process.env.PORT, () => {
    console.log(`App listen on PORT ${process.env.PORT}`);
});
