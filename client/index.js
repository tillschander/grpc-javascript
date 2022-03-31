const { User, UserStatus } = require("../proto/users_pb");
const getUser = require("./get-user").getUser;
const createUsers = require("./create-users").createNewUsers;
const allUsers = require("./all-users").allUsers;

async function run() {
  try {
    const user = await getUser(1);
    console.log(user.toString());
  } catch (error) {
    console.log(error.message)
  }

  const jim = new User();
  jim.setName("Jim");
  jim.setAge(10);
  jim.setId(20);
  jim.setStatus(UserStatus.OFFLINE);
  createUsers([jim]);
  console.log(`\nCreated user ${jim.toString()}`);

  const users = await allUsers();
  console.log(`\nListing all ${users.length} users`);
  for (const user of users) {
    console.log(user.toString());
  }
}

run();
