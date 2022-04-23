const { USER_LS_KEY } = require('../settings')

const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem(USER_LS_KEY))
  return user?.tokensData?.refreshToken
}

const getLocalToken = () => {
  const user = JSON.parse(localStorage.getItem(USER_LS_KEY))
  return user?.tokensData.token
}

const updateLocalToken = (token) => {
  const user = JSON.parse(localStorage.getItem(USER_LS_KEY))
  if (user?.tokensData) {
    user.tokensData.token = token
  }
  localStorage.setItem(USER_LS_KEY, JSON.stringify(user))
  return user
}

const getUser = () => JSON.parse(localStorage.getItem(USER_LS_KEY))

const setUser = (user) => {
  localStorage.setItem(USER_LS_KEY, JSON.stringify(user))
}

const removeUser = () => {
  localStorage.removeItem(USER_LS_KEY)
}

export default {
  getLocalRefreshToken,
  getLocalToken,
  updateLocalToken,
  getUser,
  setUser,
  removeUser,
}
