import { TopicData } from './interfaces'

export const validateCreateTopic = (topicData: TopicData) => {
  let isValid = true
  const fieldErrors: string[] = []
  const { title, content } = topicData

  if (!title || title === '') {
    isValid = false
    fieldErrors.push('Título')
  }

  if (!content || content === '') {
    isValid = false
    fieldErrors.push('Conteúdo')
  }

  return { isValid, fieldErrors }
}
