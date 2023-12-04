import { useParams } from 'react-router-dom'
import { Post } from '../../components/Post'
import { CommentContainer, TopicContainer } from './styles'
import { useEffect, useState } from 'react'
import { getOneTopic } from '../../service/topics'
import { Topic as TopicInterface } from '../Home'
import { Loading } from '../../components/Loading'

export function Topic() {
  const { id } = useParams()

  const [topic, setTopic] = useState<TopicInterface | null>(null)

  const [_, setIsLoadingTopic] = useState(false)

  useEffect(() => window.scrollTo(0, 0), [])
  useEffect(() => {
    if (id) {
      setIsLoadingTopic(true)
      getOneTopic(Number(id))
        .then((response) => {
          setTopic(response.data)
        })
        .finally(() => setIsLoadingTopic(false))
    }
  }, [id])

  return (
    <TopicContainer>
      {topic ? (
        <>
          <Post
            id={Number(topic.id)}
            author={topic.author.name}
            title={topic.title}
            categories={topic.categories}
            content={topic.content}
            isInsideTopic
          />

          <CommentContainer>
            {topic.comments.map((comment) => {
              return (
                <Post
                  key={comment.id}
                  id={comment.id}
                  isComment
                  author="Lucas"
                  content={comment.content}
                />
              )
            })}
          </CommentContainer>
        </>
      ) : (
        <Loading accessibilityLabel="Carregando dados do tópico..." />
      )}
    </TopicContainer>
  )
}
