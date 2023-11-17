import { Button, theme, AddIcon, SearchIcon, FavouriteIcon } from 'native-base'
import {
  FavoritesListContainer,
  FeedContainer,
  HomeContainer,
  LikesContainer,
  PostsContainer,
  SearchInput,
} from './styles'
import { Filter } from '../../components/Filter'
import { Post } from '../../components/Post'
import { FavoritePost } from '../../components/FavoritePost'

export function Home() {
  function handleSearch() {
    console.log('oi')
  }

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
        <SearchInput
          size="xl"
          accessibilityLabel="Pesquisar"
          placeholder="Pesquisar..."
          inputType="text"
          InputRightElement={
            <Button rounded="none" w="1/6" h="full" onPress={handleSearch}>
              <SearchIcon color={theme.colors.white} size="22" />
            </Button>
          }
        />

        <FavoritesListContainer>
          <div id="favorite-title-container">
            <h1 id="title-favorites">Tópicos Fixados</h1>
            <FavouriteIcon color={theme.colors.rose['600']} size="22" />
          </div>

          {Array.from({ length: 10 }).map((_, i) => {
            return <FavoritePost key={i} />
          })}
        </FavoritesListContainer>
      </LikesContainer>
    </HomeContainer>
  )
}
