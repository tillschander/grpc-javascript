const { Empty } = require("google-protobuf/google/protobuf/empty_pb");
const { users } = require("./db");

module.exports.UsersServer = class {
    getUser(call, callback) {
        const userId = call.request.getId();
        const user = users.find((u) => u.getId() === userId);

        if (!user) {
            const error = {
                name: "User Missing",
                message: `User with ID ${userId} does not exist.`,
            };
            callback(error, null);
            return;
        }

        console.log(`getUser: returning ${user.getName()} (id: ${user.getId()}).`);
        callback(null, user);
    }

    getUsers(call) {
        console.log(`getUsers: streaming all users.`);
        for (const user of users) call.write(user);
        call.end();
    }

    createUser(call, callback) {
        console.log(`createUsers: creating new users from stream.`);

        let userCount = 0;

        call.on("data", (u) => {
            userCount++;
            users.push(u);
        });

        call.on("end", () => {
            console.log(`Created ${userCount} new user(s).`);
            callback(null, new Empty());
        });
    }
}
