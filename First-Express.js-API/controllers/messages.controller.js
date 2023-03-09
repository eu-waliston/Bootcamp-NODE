function getMessages(req, res) {
    res.status(200).send('<h1>Hello Albert!</h1>')
}

function postMessage(req, res) {
    console.log('Updating Messages...');
}


module.exports = {
    getMessages,
    postMessage
};

