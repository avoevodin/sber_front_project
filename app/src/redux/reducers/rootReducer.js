import { combineReducers } from 'redux'
import authReducer from './authReducer'
import filterReducer from './filterReducer'
import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  filter: filterReducer,
  auth: authReducer,
})

export default rootReducer
