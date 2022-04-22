import { REGISTER_SUCCESS } from '../types/authTypes'

// eslint-disable-next-line default-param-last
const authReducer = (store = {}, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return action.payload

    default:
      return store
  }
}

export default authReducer
