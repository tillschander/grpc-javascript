const { client, noop } = require("./utils.js");


module.exports.createNewUsers = function (users) {
  const stream = client.createUser(noop);
  for (const user of users) {
    stream.write(user);
  }
  stream.end();
}