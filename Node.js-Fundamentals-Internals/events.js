const EventEmitter = require("events");
const celebrity = new EventEmitter();


//Subscribe to celebrity for Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratualtions ! You are the best');
    }

})

//Subscribe to celebrity for Observer 2
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log("Boo I can do  best than that");

    }
})

process.on('exit', (code) => {
    console.log('process  exit with code: ', code);
})

celebrity.emit('race', ' win');
celebrity.emit('race', ' lost');

