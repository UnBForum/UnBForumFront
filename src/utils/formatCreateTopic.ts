import { CreateTopic, TopicData } from './interfaces'

export const formatCreateTopic = (topicData: TopicData): CreateTopic => {
  const { title, content, files } = topicData

  return {
    title,
    content,
    // categories: [],
    files: files.map((f) => f.id),
  }
}
