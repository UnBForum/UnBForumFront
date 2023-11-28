import { AxiosResponse } from 'axios'
import api from '../api'

interface CreateUserData {}

export const createUser = async (
  data: CreateUserData,
): Promise<AxiosResponse> => {
  const response = await api.post('users', data)

  console.log(response)

  return response
}
