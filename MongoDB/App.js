const express = require("express");
require("dotenv").config();
const rootRouter = require("./src/routes/root");
const cors = require("cors");

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());


App.use("/", rootRouter);

require("./src/config/database.js");

App.listen(process.env.PORT, () => {
    console.log(`App listen on PORT ${process.env.PORT}`);
});
