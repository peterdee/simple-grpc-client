const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './proto/Posts.proto';

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
  },
);

const { SERVER_ADDRESS = '' } = process.env;

const Client = grpc.loadPackageDefinition(packageDefinition).PostsService;

const client = new Client(
  SERVER_ADDRESS,
  grpc.credentials.createInsecure(),
);

module.exports = client;
