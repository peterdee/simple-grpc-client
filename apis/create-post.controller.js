const client = require('../grpc-client');

module.exports = async (req, res) => {
  const {
    text = '',
    title = '',
  } = req.body;
  if (!(text && title)) {
    return res.status(400).send({
      info: 'MISSING_DATA',
      status: 400,
    });
  }
  const trimmedText = text.trim();
  const trimmedTitle = title.trim();
  if (!(trimmedText && trimmedTitle)) {
    return res.status(400).send({
      info: 'MISSING_DATA',
      status: 400,
    });
  }

  return client.createPost(
    {
      text: trimmedText,
      title: trimmedTitle,
    },
    (error, data) => {
      if (error) {
        return res.status(500).send({
          error,
          info: 'INTERNAL_SERVER_ERROR',
          status: 500,
        });
      }

      return res.status(201).send({
        data,
        info: 'OK',
        status: 201,
      });
    },
  );
};
