const { getAllLauches }  = require('../../models/launches.models');

function httpGetAllLaunches(req,res){
    return res.status(200).json(getAllLauches());
}

module.exports = {
    httpGetAllLaunches,
}

