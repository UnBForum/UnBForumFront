import { useParams } from 'react-router-dom'
import { Post } from '../../components/Post'
import { CommentContainer, TopicContainer } from './styles'

export function Topic() {
  const { id } = useParams()

  return (
    <TopicContainer>
      <Post id={Number(id)} isInsideTopic />

      <CommentContainer>
        {Array.from({ length: 10 }, (_, i) => i).map((i) => {
          return <Post key={i} id={i} isComment />
        })}
      </CommentContainer>
    </TopicContainer>
  )
}
