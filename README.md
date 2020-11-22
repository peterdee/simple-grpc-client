## simple-grpc-client

A simple gRPC client with Node.

Stack: [Node](https://nodejs.org), [Express](http://expressjs.com), [gRPC-JS](https://www.npmjs.com/package/@grpc/grpc-js), [jQuery](https://jquery.com)

DEV: http://localhost:3300

STAGE: https://simple-grpc-client.herokuapp.com

The server repository:

https://github.com/peterdee/simple-grpc-server

### Deploy

```shell script
git clone https://github.com/peterdee/simple-grpc-client
cd ./simple-grpc-client
nvm use 14
npm i
```

### Environment variables

The `.env` file is required. See the [.env.example](.env.example) file for details.

### Launch

```shell script
npm run dev
```

### Linting

```shell script
npm run lint
```
