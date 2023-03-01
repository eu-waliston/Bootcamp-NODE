const axios = require('axios');

axios
    .get('https://www.google.com')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log('All Done!');
    });
