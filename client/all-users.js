const { Empty } = require("google-protobuf/google/protobuf/empty_pb");
const { client } = require("./utils");

module.exports.allUsers = function () {
    return new Promise((resolve, reject) => {
        const stream = client.getUsers(new Empty());
        const users = [];
        stream.on("data", (user) => users.push(user));
        stream.on("error", reject);
        stream.on("end", () => resolve(users));
    });
}