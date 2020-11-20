const client = require('../grpc-client');

module.exports = async (_, res) => {
  return client.getPosts(null, (error, data) => {
    if (error) {
      return res.status(500).send({
        error,
        info: 'INTERNAL_SERVER_ERROR',
        status: 500,
      });
    }

    return res.status(200).send({
      data,
      info: 'OK',
      status: 200,
    });
  });
};
