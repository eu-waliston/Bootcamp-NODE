const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));
  // res.status(200).send('<h1>Hello Albert!</h1>')
}

function postMessage(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
