const { db } = require('../DB')

const { users } = db

const checkDubplicateUsernameOrEmail = (req, res, next) => {
  if (users.find((user) => user.username === req.body.username)) {
    return res.status(400).send({
      message: 'Failed! Username is already in use!',
    })
  }
  if (users.find((user) => user.email === req.body.email)) {
    return res.status(400).send({
      message: 'Failed! Email is already in use!',
    })
  }
  return next()
}

const verifySignUp = {
  checkDubplicateUsernameOrEmail,
}

module.exports = verifySignUp
