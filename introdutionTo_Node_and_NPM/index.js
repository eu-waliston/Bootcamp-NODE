const fs = require("fs");
const http = require("http");
const url = require("url");

//Files
/*
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
                    if(err) console.log(err);
                    else console.log('Your file has been writent ');
                })
            })
        })
    })
    console.log('will read file');
*/

// server
const server = http.createServer((req,res) => {
    const pathname  =  req.url

    console.log(req.url);
    if(pathname === '/' || pathname === '/overview') {
        res.end('This is the OVERVIEW 😍');
    } else if (pathname === '/product') {
        res.end('This is the PRODUCT 🍟');
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header' : "deu ruim cachorro"
        });
        res.end('<h1>Page Not Found 😢</h1>');
    }
    
    
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000 🚀")
});

