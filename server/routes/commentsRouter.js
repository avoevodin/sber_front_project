const express = require('express')
const {
  getComments, createComment, deleteComment,
} = require('../controllers/commentsController')

const commentsRouter = express.Router()

commentsRouter.route('/')
  .post(createComment)

commentsRouter.route('/post/:postId')
  .get(getComments)

commentsRouter.route('/:id')
  .delete(deleteComment)

module.exports = {
  commentsRouter,
}
