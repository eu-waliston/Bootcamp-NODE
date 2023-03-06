const http = require("http");

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Nicola Tesla'
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein'
    }
]

const server = http.createServer((req, res) => {

    const itens = req.url.split('/');

    if (req.method === 'POST' && itens[1] === 'friends') {

        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);

            friends.push(JSON.parse(friend));

            
        })
        req.pipe(res);
    } else if (req.method === 'GET' && itens[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')

        if (itens.length === 3) {

            const friendIndex = Number(itens[2]);
            res.end(JSON.stringify(friends[friendIndex]));

        } else {
            res.end(JSON.stringify(friends));
        }


    } else if (req.mthod === 'GET ' && itens[1] === 'messages') {
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