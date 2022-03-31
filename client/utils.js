const grpc = require("@grpc/grpc-js");
const usersDefinition = require("../proto/users_grpc_pb");

const port = 3000;

const credentials = grpc.ChannelCredentials.createInsecure();
const usersObject = grpc.loadPackageDefinition(usersDefinition);
const UsersClient = grpc.makeGenericClientConstructor(usersObject.users.Users.service);

module.exports.client = new UsersClient(`localhost:${port}`, credentials);
module.exports.noop = () => { };