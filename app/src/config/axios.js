import axios from 'axios'
import { API_PORT } from '../settings'

const axiosInstance = axios.create({
  baseURL: `http://localhost:${API_PORT}/api/v1/`,
})

export default axiosInstance
