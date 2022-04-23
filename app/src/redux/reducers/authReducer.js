import { LOGIN_SUCCESS, REGISTER_SUCCESS, UPDATE_TOKEN } from '../types/authTypes'

// eslint-disable-next-line default-param-last
const authReducer = (store = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return action.payload

    case LOGIN_SUCCESS:
      return action.payload

    case UPDATE_TOKEN:
      return {
        ...store,
        user: action.payload,
      }

    default:
      return store
  }
}

export default authReducer
