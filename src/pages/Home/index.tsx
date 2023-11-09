import { Button, theme, AddIcon } from 'native-base'
import { FeedContainer, HomeContainer, LikesContainer } from './styles'
import { Filter } from '../../components/Filter'

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

        <h1>Posts</h1>
      </FeedContainer>

      <LikesContainer>
        <h1>Home2</h1>
      </LikesContainer>
    </HomeContainer>
  )
}
