/* eslint-disable no-alert */
import axiosInstance from '../../config/axios'
import TokenService from '../../services/token.service'
import {
  LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, UPDATE_TOKEN,
} from '../types/authTypes'

const signUp = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
})

export const signUpQuery = (formData, e, cb) => async (dispatch) => {
  await axiosInstance.post('auth/signup', formData)
    .then((res) => {
      if (res.status === 200) {
        const userDataFromServer = res.data
        TokenService.setUser(userDataFromServer)
        dispatch(signUp(userDataFromServer))
        e.target.reset()
      }
    })
    .catch((err) => {
      const message = err.response?.data?.message
      if (message) alert(message)
    })

  if (typeof cb === 'function') cb()
}

const signIn = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
})

export const signInQuery = (formData, e, cb) => async (dispatch) => {
  await axiosInstance.post('auth/signin', formData)
    .then((res) => {
      if (res.status === 200) {
        const userDataFromServer = res.data
        TokenService.setUser(userDataFromServer)
        dispatch(signIn(userDataFromServer))
        e.target.reset()
      }
    })
    .catch((err) => {
      const message = err.response?.data?.message
      if (message) alert(message)
    })

  if (typeof cb === 'function') cb()
}

const updateToken = (payload) => ({
  type: UPDATE_TOKEN,
  payload,
})

export const updateTokenQuery = (refreshToken) => async (dispatch, getState) => {
  await axiosInstance.post('auth/token', { refreshToken })
    .then((res) => {
      const userState = getState().auth.user
      if (userState.tokensData) {
        userState.tokensData.token = res.data?.token
        TokenService.setUser(userState)
      }
      dispatch(updateToken(userState))
    })
    .catch((err) => err)
}

const signOut = () => ({
  type: LOGOUT,
})

export const signOutQuery = () => async (dispatch) => {
  TokenService.removeUser()
  dispatch(signOut())
}
