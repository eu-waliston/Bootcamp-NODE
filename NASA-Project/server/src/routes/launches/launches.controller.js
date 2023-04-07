const { getAllLauches, addNewLaunch } = require("../../models/launches.models");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLauches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
        error: 'Invalid launch date',
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
