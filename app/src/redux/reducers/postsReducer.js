import { SET_POSTS } from '../types/postsTypes'

/* eslint-disable default-param-last */
const postsReducer = (store = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload

    default:
      return store
  }
}

export default postsReducer
