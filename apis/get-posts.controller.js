const client = require('../grpc-client');

/**
 * Get posts API handler
 * @param {Request} _ - request object
 * @param {Response} res - response object
 * @returns {Promise<void>}
 */
module.exports = (_, res) => client.getPosts(
  null,
  (error, data) => {
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
  },
);
