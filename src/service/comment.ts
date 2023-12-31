import { AxiosResponse } from 'axios'
import api from '../api'

export const createComment = async (
  content: string,
  topicId: number | null,
): Promise<AxiosResponse> => {
  const response = await api.post(`topics/${topicId}/comments/`, { content })

  return response
}

export const getTopicComments = async (
  topicId: number | null,
): Promise<AxiosResponse> => {
  const response = await api.get(`topics/${topicId}/comments/`)

  return response
}

export const makeUpvoteComment = async (
  commentId: number,
  topicId: number | null,
): Promise<AxiosResponse> => {
  const response = await api.post(
    `topics/${topicId}/comments/${commentId}/upvote`,
  )

  return response
}

export const makeDownvoteComment = async (
  commentId: number,
  topicId: number | null,
): Promise<AxiosResponse> => {
  const response = await api.post(
    `topics/${topicId}/comments/${commentId}/downvote`,
  )

  return response
}

export const deleteComment = async (
  commentId: number,
  topicId: number | null,
): Promise<AxiosResponse> => {
  const response = await api.delete(`topics/${topicId}/comments/${commentId}/`)

  return response
}

export const fixComment = async (
  commentId: number,
  topicId: number | null,
): Promise<AxiosResponse> => {
  const response = await api.post(
    `topics/${topicId}/comments/${commentId}/fix/`,
  )

  return response
}

export const updateComment = async (
  commentId: number,
  topicId: number | null,
  content: string,
): Promise<AxiosResponse> => {
  const response = await api.put(`topics/${topicId}/comments/${commentId}/`, {
    content,
  })

  return response
}
