const express = require("express");
const rootRouter = express.Router();

const Planet = require("../models/planets");
const Launches = require("../models/launches");
const { default: mongoose } = require("mongoose");

rootRouter.get("/", async (req, res) => {
  let planets = await Planet.find({});
  let launches = await Launches.find({});

  res.status(200).send({ planets: planets, launches: launches });
});

rootRouter.post("/", async (req, res) => {
  let newPlanet = new Planet(req.body);
  let newLaunches = new Launches(req.body);

  try {
    newPlanet.save();
    newLaunches.save();
    res.status(200).json("Success!");
  } catch (error) {
    res.status(500).send(error);
  }
});

rootRouter.delete("/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    await Planet.findByIdAndDelete(_id);
    await Launches.findByIdAndDelete(_id);
    res.status(200).send("Delected with Success!");
  } catch (error) {
    res.send(500).send(error, "Can't Delete ");
  }
});

module.exports = rootRouter;
