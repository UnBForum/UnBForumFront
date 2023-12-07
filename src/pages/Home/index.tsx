// @ts-nocheck
import {
  Button,
  theme,
  AddIcon,
  SearchIcon,
  FavouriteIcon,
  Tooltip,
} from 'native-base'
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
import { CreateModalTopic } from '../../components/CreateTopicModal'
import { useCallback, useEffect, useState } from 'react'
import { getAllTopics } from '../../service/topics'
import { Loading } from '../../components/Loading'
import { useMediaQuery } from 'usehooks-ts'
import { BackendUser, FileData } from '../../utils/interfaces'
import { useUser } from '../../hooks/user'

export interface Category {
  id: number
  color: string
  name: string
}

export interface Comment {
  id: number
  content: string
  is_fixed: boolean
  author: BackendUser
  rating: number
  current_user_rating: number
}

export interface Topic {
  categories: Category[]
  content: string
  current_user_rating: number
  id: number
  is_fixed: boolean
  title: string
  author: BackendUser
  rating: number
  comments: Comment[]
  files: FileData[]
  comments_count: number
}

export function Home() {
  const { token } = useUser()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [topics, setTopics] = useState<Topic[]>([])

  const [isLoadingTopics, setIsLoadingTopics] = useState(false)

  useEffect(() => window.scrollTo(0, 0), [])
  useEffect(() => console.log(topics), [topics])

  useEffect(() => {
    if (!isModalOpen) {
      setIsLoadingTopics(true)

      getAllTopics()
        .then((response) => {
          setTopics(response.data)
        })
        .finally(() => setIsLoadingTopics(false))
    }
  }, [isModalOpen])

  function handleSearch() {
    console.log('Pesquisando...')
  }

  const handleModalOpen = useCallback((modalState: boolean) => {
    setIsModalOpen(modalState)
  }, [])

  return (
    <HomeContainer>
      <FeedContainer>
        <Tooltip
          isDisabled={token}
          label={
            !token ? 'Para criar um tópico é necessário estar logado' : null
          }
        >
          <Button
            isDisabled={!token}
            bgColor={theme.colors.success['600']}
            size={isMobile ? 'xs' : 'lg'}
            borderRadius="4px"
            rightIcon={<AddIcon />}
            onPress={() => handleModalOpen(true)}
          >
            <p>Criar Tópico</p>
          </Button>
        </Tooltip>

        <Filter />

        {isLoadingTopics ? (
          <Loading accessibilityLabel="Carregando os tópicos..." />
        ) : (
          <>
            <PostsContainer>
              {topics.map((topic) => {
                return (
                  <Post
                    key={topic.id}
                    id={topic.id}
                    title={topic.title}
                    rating={topic.rating}
                    files={topic.files}
                    currentRating={topic.current_user_rating}
                    content={topic.content}
                    author={topic.author.name}
                    commentsCount={topic.comments_count}
                    categories={topic.categories}
                  />
                )
              })}
            </PostsContainer>
          </>
        )}
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

      <CreateModalTopic
        isModalOpen={isModalOpen}
        setIsModalOpen={handleModalOpen}
      />
    </HomeContainer>
  )
}
