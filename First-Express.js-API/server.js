const express = require("express");

const path = require("path")

const friendsRouter = require("./routes/friends.router")
const messagesRouter = require("./routes/messages.router")

const app = express();

app.set('view engine', 'hbs')
app.set('vews', path.join(__dirname, 'views'))


const PORT = 3000;


//Middlewares
app.use((req, res, next) => {

    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})


app.use('/site', express.static(path.join(__dirname,'public')))
app.use(express.json())

app.get('/', (req,res) => {
    res.render('index', {
        title: "My Friend are veri clever",
        caption: "Le's Go Skiing!"
    })
})

app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
