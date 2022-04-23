const user = JSON.parse(localStorage.getItem('user'))
const initAuthData = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const initState = {
  posts: [],
  filter: '',
  auth: initAuthData,
}

export default initState
