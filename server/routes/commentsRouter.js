const express = require('express')
const {
  getComments, createComment, deleteComment, updateComment,
} = require('../controllers/commentsController')

const commentsRouter = express.Router()

commentsRouter.route('/')
  .post(createComment)

commentsRouter.route('/post/:postId')
  .get(getComments)

commentsRouter.route('/:id')
  .patch(updateComment)
  .delete(deleteComment)

module.exports = {
  commentsRouter,
}
