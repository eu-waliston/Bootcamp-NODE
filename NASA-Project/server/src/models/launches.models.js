const lauches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Explorarion X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2023'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

lauches.set(launch.flightNumber, launch);

module.exports = {
    lauches,
}