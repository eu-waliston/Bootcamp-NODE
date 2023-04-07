const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: 'Kepler Explorarion X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2023'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

function getAllLauches() {
    return  Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber += 1;

    launches.set(launch.flightNumber,Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber,
    }));
}

function abortLaunchById(launchId) {
    
}

module.exports = {
    getAllLauches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}