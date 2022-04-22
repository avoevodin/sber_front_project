const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { db } = require('../DB')
const authConfig = require('../config/auth.config')

const { users } = db
const tokensList = {}

const createAccessAndRefreshTokens = (userData) => {
  const token = jwt.sign({ id: userData.id }, authConfig.secret, {
    expiresIn: authConfig.tokenLife,
  })
  const refreshToken = jwt.sign({ id: userData.id }, authConfig.refreshTokenSecret, {
    expiresIn: authConfig.refreshTokenLife,
  })

  const tokensData = {
    userId: userData.id,
    token,
    refreshToken,
  }

  tokensList[refreshToken] = tokensData

  return tokensData
}

const getUserDataForClient = (userId, userData) => ({
  userData: {
    userId,
    username: userData.username,
    avatar: userData.avatar,
  },
  tokensData: createAccessAndRefreshTokens({
    id: userId,
  }),
})

const signUp = (req, res) => {
  const postData = req.body
  const userId = uuidv4()
  users.push({
    id: userId,
    username: postData.username,
    email: postData.email,
    avatar: postData.avatar,
    password: bcrypt.hashSync(postData.password, 8),
  })

  res.status(200).send(getUserDataForClient(userId, postData))
}

const signIn = (req, res) => {
  const userData = req.body
  const user = users.find((el) => el.username === userData.username
    || el.email === userData.username)

  if (!user) return res.status(404).send({ message: 'User not found!' })

  const passwordIsValid = bcrypt.compareSync(
    userData.password,
    user.password,
  )

  if (!passwordIsValid) {
    return res.status(401).send({
      token: null,
      message: 'Invalid password!',
    })
  }

  return res.status(200).send(getUserDataForClient(user.id, userData))
}

const updateToken = (req, res) => {
  const postData = req.body
  const refreshToken = postData?.refreshToken

  if (refreshToken && refreshToken in tokensList) {
    const tokensData = tokensList[refreshToken]
    tokensData.token = jwt.sign({ id: tokensData.userId }, authConfig.secret, {
      expiresIn: authConfig.tokenLife,
    })

    res.status(200).json({ token: tokensData.token })
  } else {
    res.status(404).send('Invalid request')
  }
}

module.exports = {
  signUp,
  signIn,
  updateToken,
}
