const fs = require("fs");

//Files

//Bloking sychronous way
const hello = "Hello World";
console.log(hello);

const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is whta we know about avocado: \n ${textIn} \n Created on ${Date.now()}`;
fs.writeFileSync('./text/output.txt', textOut);
console.log('File Written!');

//Non Bloking sychronous way
fs.readFile("./text/start.txt", 'utf-8', (err, data1) => {
    fs.readFile(`./text/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./text/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                if (err) console.log(err);
                else console.log('Your file has been writent ');
            })
        })
    })
})
console.log('will read file');




