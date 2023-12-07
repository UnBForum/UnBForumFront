import { AxiosResponse } from 'axios'
import queryString from 'query-string'

import api from '../api'
import { TopicData } from '../utils/interfaces'

interface getTopicsParams {
  search?: string
  order_by?: string
  is_fixed?: boolean
  category__id__in?: number[]
}

export const getAllTopics = async (
  params: getTopicsParams,
): Promise<AxiosResponse> => {
  return await api.get(
    `topics/?${queryString.stringify(params, { arrayFormat: 'comma' })}`,
  )
}

export const getOneTopic = async (id: number): Promise<AxiosResponse> => {
  const response = await api.get(`topics/${id}`)

  return response
}

export const createTopic = async (data: TopicData): Promise<AxiosResponse> => {
  const response = await api.post(`topics`, data)

  return response
}
