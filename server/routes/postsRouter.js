const express = require('express')
const { getPosts, createPost, deletePost } = require('../controllers/postsController')

const postsRouter = express.Router()

postsRouter.route('/')
  .get(getPosts)
  .post(createPost)

postsRouter.route('/:id')
  .delete(deletePost)

module.exports = {
  postsRouter,
}
