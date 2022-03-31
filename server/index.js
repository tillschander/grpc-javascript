const grpc = require("@grpc/grpc-js");
const usersDefinition = require("../proto/users_grpc_pb");
const { UsersServer } = require("./services");

const port = 3000;

const credentials = grpc.ServerCredentials.createInsecure()
const usersObject = grpc.loadPackageDefinition(usersDefinition);
const server = new grpc.Server();

server.addService(usersObject.users.Users.service, new UsersServer());
server.bindAsync(`localhost:${port}`, credentials, (error, port) => {
    server.start();
    console.log(`Listening on localhost:${port}`);
});
