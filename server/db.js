const { User, UserStatus } = require("../proto/users_pb");

function userToClass({ id, name, age, status }) {
    const user = new User();
    user.setId(id);
    user.setName(name);
    user.setAge(age);
    user.setStatus(status);
    return user;
}

module.exports.users = [
    { id: 1, name: "Teddy", age: 25, status: UserStatus.BUSY },
    { id: 2, name: "Joss", age: 13, status: UserStatus.OFFLINE },
].map(userToClass);