const { getAllLauches, addNewLaunch }  = require('../../models/launches.models');

function httpGetAllLaunches(req,res){
    return res.status(200).json(getAllLauches());
}

function httpAddNewLaunch(req,res) {

    const launch = req.body;

    launch.launchDate = new Date(launch.launchDate);


    addNewLaunch(launch);

    return res.status(201).json(launch)
}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}

