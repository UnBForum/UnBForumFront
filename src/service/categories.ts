import { AxiosResponse } from 'axios'
import api from '../api'
import { Category } from '../utils/interfaces'

export const getAllCategories = async (): Promise<AxiosResponse> => {
  return await api.get('categories/')
}

export const createCategory = async (
  categoryData: Category,
): Promise<AxiosResponse> => {
  const response = await api.post('categories/', categoryData)

  return response
}

export const deleteCategory = async (id: number): Promise<AxiosResponse> => {
  const response = await api.delete(`categories/${id}/`)

  return response
}

export const updateCategory = async (
  categoryData: Category,
): Promise<AxiosResponse> => {
  const response = await api.patch(`categories/${categoryData.id}/`, {
    ...categoryData,
  })

  return response
}
