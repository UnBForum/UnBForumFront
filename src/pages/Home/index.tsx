import { Button, theme, AddIcon } from 'native-base'
import {
  FeedContainer,
  HomeContainer,
  LikesContainer,
  PostsContainer,
} from './styles'
import { Filter } from '../../components/Filter'
import { Post } from '../../components/Post'

export function Home() {
  return (
    <HomeContainer>
      <FeedContainer>
        <Button
          bgColor={theme.colors.success['600']}
          size="lg"
          borderRadius="4px"
          rightIcon={<AddIcon />}
        >
          <p>Criar Tópico</p>
        </Button>

        <Filter />

        <PostsContainer>
          {Array.from({ length: 20 }, (_, i) => i).map((i) => {
            return <Post key={i} />
          })}
        </PostsContainer>
      </FeedContainer>

      <LikesContainer>
        <h1>Home2</h1>
      </LikesContainer>
    </HomeContainer>
  )
}
