const express = require('express')

const authRouter = express.Router()

authRouter.route('/signup')
    .post()
authRouter.route('/signin')
    .post()

module.exports = {
    authRouter
}
