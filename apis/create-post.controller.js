const client = require('../grpc-client');

module.exports = async (_, res) => {
  return res.status(200).send({
    data: null,
    info: 'OK',
    status: 201,
  });
};
