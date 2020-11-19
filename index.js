const env = require('dotenv').config();

if (env && env.error) {
  throw env.error;
}

const client = require('./client');

(function () {
  return client.getPosts(null, (err, data) => {
    if (err) {
      return console.log('ERROR', err);
    }

    return console.log(data);
  });
}())
