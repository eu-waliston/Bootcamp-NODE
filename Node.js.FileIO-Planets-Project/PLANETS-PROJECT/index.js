const parse = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream('./kepler_data.csv').on('data', (data) => {
    results.push(data);
}).on('end', () => {
    console.log(results);
    console.log("done!");
})

// parse();
