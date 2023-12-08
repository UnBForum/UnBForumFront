import { AxiosResponse } from 'axios'
import api from '../api'

export const getAllCategories = async (): Promise<AxiosResponse> => {
  return await api.get('categories/')
}
