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
    console.log(id)
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
            rating={topic.rating}
            currentRating={topic.current_user_rating}
            isInsideTopic
          />

          <CommentContainer>
            {topic.comments.map((comment) => {
              return (
                <Post
                  key={comment.id}
                  id={comment.id}
                  isComment
                  topicId={topic.id}
                  author={comment.author.name}
                  rating={comment.rating}
                  currentRating={comment.current_user_rating}
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
