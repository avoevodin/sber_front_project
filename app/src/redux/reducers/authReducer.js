import {
  LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, UPDATE_TOKEN,
} from '../types/authTypes'

// eslint-disable-next-line default-param-last
const authReducer = (store = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { isLoggedIn: true, user: action.payload }

    case LOGIN_SUCCESS:
      return { isLoggedIn: true, user: action.payload }

    case UPDATE_TOKEN:
      return {
        ...store,
        user: action.payload,
      }

    case LOGOUT:
      return { isLoggedIn: false, user: null }

    default:
      return store
  }
}

export default authReducer
