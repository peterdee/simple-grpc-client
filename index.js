const env = require('dotenv').config();

if (env && env.error) {
  throw env.error;
}

const compress = require('compress');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const rateLimiter = require('express-rate-limit');

const log = require('./utilities/log');
const { PORT } = require('./configuration');

const createPost = require('./apis/create-post.controller');
const getPosts = require('./apis/get-posts.controller');

const app = express();
const limiter = rateLimiter({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

app.use(limiter());
app.use(compress());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.get('/api/posts', getPosts);
app.post('/api/posts', createPost);

app.listen(
  PORT,
  () => log(`-- SIMPLE GRPC CLIENT is running on port ${PORT}`),
);
