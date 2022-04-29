const { USER_LS_KEY } = require('../settings')

const getUser = () => JSON.parse(localStorage.getItem(USER_LS_KEY))

const setUser = (user) => {
  localStorage.setItem(USER_LS_KEY, JSON.stringify(user))
}

const removeUser = () => {
  localStorage.removeItem(USER_LS_KEY)
}

export default {
  getUser,
  setUser,
  removeUser,
}
