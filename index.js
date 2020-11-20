const env = require('dotenv').config();

if (env && env.error) {
  throw env.error;
}

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const log = require('./utilities/log');
const { PORT } = require('./configuration');

const createPost = require('./apis/create-post.controller');
const getPosts = require('./apis/get-posts.controller');

const app = express();

app.use(cors());
app.use(helmet());

app.get('/api/posts', getPosts);
app.post('/api/posts', createPost);

app.listen(
  PORT,
  () => log(`-- SIMPLE GRPC CLIENT is running on port ${PORT}`),
);
