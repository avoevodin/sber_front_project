/* eslint-disable no-alert */
import { API_PORT } from '../../settings'
import { ADD_POST, DELETE_POST, SET_POSTS } from '../types/postsTypes'

const setPosts = (newPosts) => ({
  type: SET_POSTS,
  payload: newPosts,
})

export const setPostsQuery = ({ filter }) => async (dispatch) => {
  const res = await fetch(`http://localhost:${API_PORT}/api/v1/posts/${filter}`)
  const dataFromServer = await res.json()
  dispatch(
    setPosts(dataFromServer),
  )
}

const addPost = (newPost) => ({
  type: ADD_POST,
  payload: newPost,
})

export const addPostQuery = (formData, e) => async (dispatch) => {
  const res = await fetch(`http://localhost:${API_PORT}/api/v1/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (res.status === 201) {
    const postFromServer = await res.json()
    dispatch(addPost(postFromServer))
    e.target.reset()
  } else {
    alert('Wrong data')
  }
}

const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
})

export const deletePostQuery = (id, navigateBack = undefined) => async (dispatch) => {
  const res = await fetch(`http://localhost:${API_PORT}/api/v1/posts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (res.status === 200) {
    dispatch(deletePost(id))
    if (navigateBack) navigateBack()
  }
  return true
}
