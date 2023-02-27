// const request = require("./request");
// const response = require("./response");

// module.exports = {
//     send: request.send,
//     read: response.read,
// }

module.exports = {
    ...require("./request"),
    ...require("./response")
}