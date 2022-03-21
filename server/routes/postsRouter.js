const express = require('express')
const { getPosts } = require('../controllers/postsController')

const postsRouter = express.Router()

postsRouter.route('/')
  .get(getPosts)

module.exports = {
  postsRouter,
}
