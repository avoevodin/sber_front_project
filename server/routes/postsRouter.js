const express = require('express')
const { getPosts, createPost } = require('../controllers/postsController')

const postsRouter = express.Router()

postsRouter.route('/')
  .get(getPosts)
  .post(createPost)

module.exports = {
  postsRouter,
}
