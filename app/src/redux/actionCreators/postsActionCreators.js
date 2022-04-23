/* eslint-disable no-alert */
import axiosInstance from '../../config/axios'
import {
  ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST,
} from '../types/postsTypes'

const setPosts = (newPosts) => ({
  type: SET_POSTS,
  payload: newPosts,
})

export const setPostsQuery = (filter) => async (dispatch) => {
  const res = await axiosInstance.get(`posts/${filter}`)
  const dataFromServer = res.data
  dispatch(
    setPosts(dataFromServer),
  )
}

const addPost = (newPost) => ({
  type: ADD_POST,
  payload: newPost,
})

export const addPostQuery = (formData, e, changePosts = true) => async (dispatch) => {
  const res = await axiosInstance.post('posts/', formData)
  if (res.status === 201) {
    if (changePosts) {
      const postFromServer = res.data
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
  const res = await axiosInstance.delete(`posts/${id}`)

  if (res.status === 200) {
    dispatch(deletePost(id))
    if (navigateBack) navigateBack()
  }
  return true
}

export const getPostQuery = (id, signal, setLoading) => async (dispatch) => {
  const res = await axiosInstance(`posts/${id}`, {
    signal,
  })
  if (res.status === 200) {
    const dataFromServer = res.data
    dispatch(setPosts([dataFromServer]))
  }
  setLoading(false)
}

const updatePost = (updatedPost) => ({
  type: UPDATE_POST,
  payload: updatedPost,
})

export const updatePostQuery = (id, formData, closeModal, e) => async (dispatch) => {
  const res = await axiosInstance.patch(`posts/${id}`, formData)

  if (res.status === 200) {
    const updatedPost = res.data

    dispatch(updatePost(updatedPost))
    e.target.reset()
    closeModal()
  } else {
    alert('Wrong data')
  }
}
