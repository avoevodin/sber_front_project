/* eslint-disable no-alert */
import axiosInstance from '../../config/axios'
import { USER_LS_KEY } from '../../settings'
import { REGISTER_SUCCESS } from '../types/authTypes'

const setTokensToLS = (tokensData) => {
  localStorage.setItem(USER_LS_KEY, tokensData)
}

export const signUp = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
})

export const signUpQuery = (formData, e) => async (dispatch) => {
  await axiosInstance.post('auth/signup', formData)
    .then((res) => {
      if (res.status === 200) {
        const userDataFromServer = res.data
        setTokensToLS(JSON.stringify(userDataFromServer.tokensData))
        dispatch(signUp(userDataFromServer.userData))
        e.target.reset()
      }
    })
    .catch((err) => {
      const message = err.response?.data?.message
      if (message) alert(message)
    })
}

export const signInQuery = () => {

}
