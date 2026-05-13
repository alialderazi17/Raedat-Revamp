import Axios from 'axios'

export const BASE_URL = 'http://localhost:3000/'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
      console.log('Token: ', token)
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
