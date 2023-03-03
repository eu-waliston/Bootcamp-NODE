const fs = require("fs");
const {parse} = require("csv-parse");

const habitablePlanets = [];

function isHabitablePlane(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

fs.createReadStream("./kepler_data.csv").pipe(parse({
    comment: '#',
    columns: true,
})).on('data', (data) => {
    if(isHabitablePlane(data)) {
        habitablePlanets.push(data)
    }
}).on('end', () => {
    console.log(`${habitablePlanets.length} habitable planets found!`);

    console.log('\nAnd They are: \n');
    console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name']
    }));
})