const path = require("path");

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends',
    friend: 'Elon Musk',
  })
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
  // res.status(200).send('<h1>Hello Albert!</h1>')
}

function postMessage(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
