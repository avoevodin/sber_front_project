import axios from 'axios'
import { API_PORT } from '../settings'

const axiosInstance = axios.create({
  baseURL: `http://localhost:${API_PORT}/api/v1/`,
})

const contentType = { 'Content-Type': 'application/json' }
const methodsForContentType = ['post', 'patch', 'delete']
methodsForContentType.forEach((method) => {
  axiosInstance.defaults.headers[method] = {
    ...axiosInstance.defaults.headers[method],
    ...contentType,
  }
})

export default axiosInstance
