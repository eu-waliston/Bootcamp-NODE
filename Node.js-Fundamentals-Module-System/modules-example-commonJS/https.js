const {send, read } = require("./internals")

// const { send } = require("./internals/request")
// const { read } = require("./internals/response")

function makeRequest(url, data) {
    send(url, data);
    return read();
}


const responseData = makeRequest('https://google.com.br', 'Hello');
console.log(responseData);