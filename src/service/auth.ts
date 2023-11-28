import { AxiosResponse } from 'axios'
import api from '../api'
import { LoginUser } from '../utils/interfaces'

export const loginUser = async (data: LoginUser): Promise<AxiosResponse> => {
  const { username, password } = data
  const formData = new FormData()

  formData.append('username', username)
  formData.append('password', password)

  const response = await api.post('auth/login', formData)

  return response
}
