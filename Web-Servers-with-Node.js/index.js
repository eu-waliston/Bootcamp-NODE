const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/friends') {
        // res.writeHead(200, {
        //     'Content-Type': 'application/json'
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            id: 1,
            name: 'Sir Isaac Newton',
        }));
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html')

        res.write('<html>')
        res.write('<body>')
        res.write('<li> Hello Isaac! </li>')
        res.write('<li> What are your thoughts about astronomy?</li>')
        res.write('</html>')
        res.write('</body>')
        res.end();
    } else {
        res.statusCode = 500;

        res.setHeader('Content-Type', 'text/html')

        res.write('<html>')
        res.write('<body>')
        res.write('<h1>404 - PAGE NOT FOUND</h1>')
        res.write('</html>')
        res.write('</body>')
        res.end();

    }


});


server.listen(PORT, () => {
    console.log(`🚀 Listening on port ${PORT}`);
})