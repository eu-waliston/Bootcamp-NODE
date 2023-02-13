const fs = require("fs");
const http = require("http");
const url = require("url");

// server
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)

    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)

    if (!product.organic){
        output = output.replace(/{%NOT_ORGANIC}/g, 'not-organic');
    }

    return output;

}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');

const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')

const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathname = req.url
    console.log(req.url);

    //Overview Page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(404, { 'Content-type': 'text/html' });

        const cardsHml = dataObj.map(el => replaceTemplate(tempCard, el)).join('')

        const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHml)

        res.end(output);

        //Products Page
    } else if (pathname === '/product') {
        res.end('This is the PRODUCT 🍟');

        //API
    } else if (pathname === '/api') {

        res.writeHead(200, { 'Cotent-type': "application/json" })
        res.end(data);

        //Not Found Page
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': "deu ruim cachorro"
        });
        res.end('<h1>Page Not Found 😢</h1>');
    }


});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening to requests on port 8000 🚀")
});