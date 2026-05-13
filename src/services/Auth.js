import Client from './api'

export const loginUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('userToken', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const checkSession = async (data) => {
  try {
    const res = await Client.get('/auth/session')
    console.log('response: ', res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
