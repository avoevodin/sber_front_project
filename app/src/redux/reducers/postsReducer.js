import { ADD_POST, DELETE_POST, SET_POSTS } from '../types/postsTypes'

/* eslint-disable default-param-last */
const postsReducer = (store = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.payload
    case ADD_POST:
      return [...store, action.payload]
    case DELETE_POST:
      return store.filter((post) => post.id !== action.payload)

    default:
      return store
  }
}

export default postsReducer
