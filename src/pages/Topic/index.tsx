import { useNavigate, useParams } from 'react-router-dom'
import { Post } from '../../components/Post'
import { CommentContainer, TopicContainer } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { getOneTopic } from '../../service/topics'
import { Topic as TopicInterface } from '../Home'
import { Loading } from '../../components/Loading'
import { useUser } from '../../hooks/user'
import { CreateComment } from '../../components/CreateComment'
import { getTopicComments } from '../../service/comment'

export function Topic() {
  const { id } = useParams()
  const { token } = useUser()
  const navigate = useNavigate()

  const [topic, setTopic] = useState<TopicInterface | null>(null)

  const [_, setIsLoadingTopic] = useState(false)
  const [isLoadingComments, setIsLoadingComments] = useState(false)

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

  const handleMakeComment = useCallback(() => {
    if (topic) {
      setIsLoadingComments(true)

      getTopicComments(topic.id)
        .then((response) => {
          setTopic({ ...topic, comments: response.data })
        })
        .finally(() => {
          setIsLoadingComments(false)
        })
    }
  }, [topic])

  const reloadTopicDataOnAction = async () => {
    setIsLoadingTopic(true)
    getOneTopic(Number(id))
      .then((response) => {
        setTopic(response.data)
      })
      .catch(() => navigate('/'))
      .finally(() => setIsLoadingTopic(false))
  }

  return (
    <TopicContainer>
      {topic ? (
        <>
          <Post
            id={Number(topic.id)}
            author={topic.author.name}
            authorEmail={topic.author.email}
            title={topic.title}
            categories={topic.categories}
            content={topic.content}
            rating={topic.rating}
            files={topic.files}
            currentRating={topic.current_user_rating}
            isSave={topic.current_user_has_saved}
            isFixed={topic.is_fixed}
            deleteTopicCallback={reloadTopicDataOnAction}
            fixedTopicCallback={reloadTopicDataOnAction}
            isInsideTopic
          />

          <CommentContainer>
            {token && (
              <CreateComment
                topicId={topic.id}
                onCommentCreated={handleMakeComment}
              />
            )}

            {isLoadingComments ? (
              <Loading accessibilityLabel="Carregando os comentários do tópico..." />
            ) : (
              <>
                {topic.comments.map((comment) => {
                  return (
                    <Post
                      key={comment.id}
                      id={comment.id}
                      isComment
                      topicId={topic.id}
                      isFixed={comment.is_fixed}
                      author={comment.author.name}
                      authorEmail={comment.author.email}
                      rating={comment.rating}
                      currentRating={comment.current_user_rating}
                      deleteTopicCallback={reloadTopicDataOnAction}
                      fixedTopicCallback={reloadTopicDataOnAction}
                      content={comment.content}
                    />
                  )
                })}
              </>
            )}
          </CommentContainer>
        </>
      ) : (
        <Loading accessibilityLabel="Carregando dados do tópico..." />
      )}
    </TopicContainer>
  )
}
