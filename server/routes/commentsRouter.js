const express = require('express')
const {
  getComments, createComment, deleteComment, updateComment,
} = require('../controllers/commentsController')
const verifyToken = require('../middlewares/authJWT')

const commentsRouter = express.Router()

commentsRouter.use(verifyToken)

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
