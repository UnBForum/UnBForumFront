import { AxiosResponse } from 'axios'
import api from '../api'

export const uploadFile = async (file: File): Promise<AxiosResponse> => {
  const formData = new FormData()

  formData.append('files', file)
  console.log(formData)

  const response = await api.post('files/upload/', formData, {
    headers: { 'Content-Type': file.type },
  })

  return response
}
