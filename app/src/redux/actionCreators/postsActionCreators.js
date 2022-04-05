/* eslint-disable no-alert */
import { API_PORT } from '../../settings'
import {
  ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST,
} from '../types/postsTypes'

const setPosts = (newPosts) => ({
  type: SET_POSTS,
  payload: newPosts,
})

export const setPostsQuery = (filter) => async (dispatch) => {
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

export const addPostQuery = (formData, e, changePosts = true) => async (dispatch) => {
  const res = await fetch(`http://localhost:${API_PORT}/api/v1/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (res.status === 201) {
    if (changePosts) {
      const postFromServer = await res.json()
      dispatch(addPost(postFromServer))
    }
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

export const getPostQuery = (id, signal, setLoading) => async (dispatch) => {
  const res = await fetch(`http://localhost:${API_PORT}/api/v1/posts/${id}`, {
    signal,
  })
  if (res.status === 200) {
    const dataFromServer = await res.json()
    dispatch(setPosts([dataFromServer]))
  }
  setLoading(false)
}

const updatePost = (updatedPost) => ({
  type: UPDATE_POST,
  payload: updatedPost,
})

export const updatePostQuery = (id, formData, closeModal, e) => async (dispatch) => {
  const res = await fetch(`http://localhost:${API_PORT}/api/v1/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (res.status === 200) {
    const updatedPost = await res.json()

    dispatch(updatePost(updatedPost))
    e.target.reset()
    closeModal()
  } else {
    alert('Wrong data')
  }
}
