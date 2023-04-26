const express = require('express');
require('dotenv').config();
const root = require('./routes/root.router');

const app = express();

app.use('/', root);

app.listen(process.env.PORT, () => {
    console.log(`Server runing on PORT ${process.env.PORT}`);
})

