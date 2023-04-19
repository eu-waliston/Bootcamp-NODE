const express = require("express");

const rootRouter = express.Router();

rootRouter.get("/", (req,res) => {
    res.status(200).send("<h1>Root Router</h1>");
});

module.exports = rootRouter;