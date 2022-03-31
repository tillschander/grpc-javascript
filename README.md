# Implementing a gRPC client and server in JavaScript

This repo can be used as a template for using gRPC to generate JavaScript files for interacting with a gRPC server or client. Setup this process can be fiddly, hopefully in this repo will make it easier to understand.

The code was forked from https://github.com/jsbroks/grpc-typescript.
But instead of Typescript this project now uses plain JavaScript.
Instead of yarn npm is used as the package manager.
And most importantly the packages were updated because the grpc package is deprecated and @grpc/grpc-js should be used instead.