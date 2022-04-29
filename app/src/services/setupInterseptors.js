/* eslint-disable no-underscore-dangle */
import axiosInstance from '../config/axios'
import { updateTokenQuery } from '../redux/actionCreators/authActionCreators'

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = store.auth?.tokensData?.token
      const newConfig = { ...config }
      newConfig.headers['Content-Type'] = 'application/json'
      if (token) {
        newConfig.headers.authorization = `Bearer ${token}`
      }
      return newConfig
    },
    (err) => Promise.reject(err),
  )
  const { dispatch } = store
  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalConfig = err.config
      if (originalConfig?.url !== 'auth/signin' && err.response) {
        if (err.response.status === 403 && !originalConfig._retry) {
          originalConfig._retry = true
          try {
            await dispatch(updateTokenQuery())
            return axiosInstance(originalConfig)
          } catch (_err) {
            return Promise.reject(_err)
          }
        }
      }
      return Promise.reject(err)
    },
  )
}

export default setup
