import tokenService from '../services/token.service'

const user = tokenService.getUser()
const initAuthData = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const initState = {
  posts: [],
  filter: '',
  auth: initAuthData,
}

export default initState
