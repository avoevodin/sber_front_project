const express = require('express')
const {
  getPosts, createPost, deletePost, getCurrentPost, updatePost,
} = require('../controllers/postsController')
const verifyToken = require('../middlewares/authJWT')

const postsRouter = express.Router()

postsRouter.use(verifyToken)

postsRouter.route('/')
  .get(getPosts)
  .post(createPost)

postsRouter.route('/:id')
  .get(getCurrentPost)
  .patch(updatePost)
  .delete(deletePost)

module.exports = {
  postsRouter,
}
