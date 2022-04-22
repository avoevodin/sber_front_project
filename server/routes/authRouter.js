const express = require('express')
const { signUp, signIn, updateToken } = require('../controllers/authController')
const verifySignUp = require('../middlewares/verifySignUp')

const authRouter = express.Router()

authRouter.route('/signup')
  .post(verifySignUp.checkDubplicateUsernameOrEmail, signUp)

authRouter.route('/signin')
  .post(signIn)

authRouter.route('/token')
  .post(updateToken)

module.exports = {
  authRouter,
}
