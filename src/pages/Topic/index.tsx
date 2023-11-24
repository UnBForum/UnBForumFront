import { useParams } from 'react-router-dom'
import { Post } from '../../components/Post'
import { TopicContainer } from './styles'

export function Topic() {
  const { id } = useParams()

  return (
    <TopicContainer>
      <Post id={Number(id)} isInsideTopic />
    </TopicContainer>
  )
}
