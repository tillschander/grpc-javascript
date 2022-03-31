const { User, UserRequest } = require("../proto/users_pb");
const { client } = require("./utils.js");

module.exports.getUser = function (id) {
  return new Promise((resolve, reject) => {
    const request = new UserRequest();
    request.setId(id);

    client.getUser(request, (err, user) => {
      if (err) reject(err);
      else resolve(user);
    });
  });
}