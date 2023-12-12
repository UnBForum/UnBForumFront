import { AxiosResponse } from 'axios'
import queryString from 'query-string'

import api from '../api'
import { CreateTopic } from '../utils/interfaces'

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

export const createTopic = async (
  data: CreateTopic,
): Promise<AxiosResponse> => {
  const response = await api.post(`topics`, data)

  return response
}

export const editTopic = async (
  data: CreateTopic,
  id: number,
): Promise<AxiosResponse> => {
  const response = await api.put(`topics/${id}`, data)

  return response
}

export const makeUpvoteTopic = async (
  topicId: number,
): Promise<AxiosResponse> => {
  const response = await api.post(`topics/${topicId}/upvote`)

  return response
}

export const makeDownvoteTopic = async (
  topicId: number,
): Promise<AxiosResponse> => {
  const response = await api.post(`topics/${topicId}/downvote`)

  return response
}

export const saveTopic = async (topicId: number): Promise<AxiosResponse> => {
  const response = await api.post(`topics/${topicId}/save`)

  return response
}

export const unsaveTopic = async (topicId: number): Promise<AxiosResponse> => {
  const response = await api.post(`topics/${topicId}/unsave`)

  return response
}

export const getUserSavedTopics = async (): Promise<AxiosResponse> => {
  const response = await api.get(`users/me/saved_topics/`)

  return response
}

export const getUserTopics = async (): Promise<AxiosResponse> => {
  const response = await api.get(`users/me/topics/`)

  return response
}

export const deleteUserTopic = async (id: number): Promise<AxiosResponse> => {
  const response = await api.delete(`topics/${id}/`)

  return response
}

export const fixedTopic = async (id: number): Promise<AxiosResponse> => {
  const response = await api.post(`topics/${id}/fix/`)

  return response
}
