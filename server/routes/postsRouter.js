const express = require('express')
const {
  getPosts, createPost, deletePost, getCurrentPost,
} = require('../controllers/postsController')

const postsRouter = express.Router()

postsRouter.route('/')
  .get(getPosts)
  .post(createPost)

postsRouter.route('/:id')
  .get(getCurrentPost)
  .delete(deletePost)

module.exports = {
  postsRouter,
}
