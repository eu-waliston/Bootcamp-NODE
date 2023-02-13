const fs = require("fs");
// const hello = "Hello World";
// console.log(hello);

const textIn = fs.readFileSync('./text/input.txt', 'utf-8');

// console.log(textIn);

const textOut = `This is whta we know about avocado: \n ${textIn} \n Created on ${Date.now()}`;

fs.writeFileSync('./text/output.txt', textOut);
console.log('File Written!');