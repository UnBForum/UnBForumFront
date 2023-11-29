import { AxiosResponse } from 'axios'
import api from '../api'
import { CreateUser, UpdateUser, UpdateUserPassword } from '../utils/interfaces'

export const createUser = async (data: CreateUser): Promise<AxiosResponse> => {
  const response = await api.post('users', data)

  return response
}

export const getCurretUser = async (): Promise<AxiosResponse> => {
  const response = await api.get('users/me')

  return response
}

export const updateUser = async (
  newData: UpdateUser,
): Promise<AxiosResponse> => {
  const response = await api.patch('users/me', newData)

  return response
}

export const updateUserPassword = async (
  data: UpdateUserPassword,
): Promise<AxiosResponse> => {
  const response = await api.post('users/me/change_password', data)

  return response
}

export const deleteUser = async (): Promise<AxiosResponse> => {
  const response = await api.delete('users/me')

  return response
}
