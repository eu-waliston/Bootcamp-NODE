const fs = require("fs");
const {parse} = require("csv-parse");

const results = [];

fs.createReadStream("./kepler_data.csv").pipe(parse({
    comment: '#',
    columns: true,
})).on('data', (data) => {
    results.push(data)
}).on('end', () => {
    console.log(results);
    console.log('done 🔥');
})