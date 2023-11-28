import { AxiosResponse } from 'axios'
import api from '../api'
import { CreateUser } from '../utils/interfaces'

export const createUser = async (data: CreateUser): Promise<AxiosResponse> => {
  const response = await api.post('users', data)

  return response
}
