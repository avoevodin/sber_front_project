const user = JSON.parse(localStorage.getItem('user'))
const authData = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const initState = {
  posts: [],
  filter: '',
  auth: authData,
}

export default initState
