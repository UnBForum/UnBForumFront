// @ts-nocheck
import { Button, theme, AddIcon, FavouriteIcon, Tooltip } from 'native-base'
import {
  FavoritesListContainer,
  FeedContainer,
  HomeContainer,
  LikesContainer,
  PostsContainer,
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
import { useNavigate } from 'react-router-dom'

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
  current_user_has_saved: boolean
}

export function Home() {
  const { token } = useUser()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [topics, setTopics] = useState<Topic[]>([])

  const [categoryFilters, setCategoryFilters] = useState<number[]>([])
  const [orderBy, setOrderBy] = useState('-created_at')
  const [onChangeSearchText, setOnChangeSearchText] = useState('')
  const [searchText, setSearchText] = useState('')

  const [isLoadingTopics, setIsLoadingTopics] = useState(false)

  useEffect(() => window.scrollTo(0, 0), [])
  useEffect(() => console.log(topics), [topics])

  useEffect(() => {
    if (!isModalOpen) {
      setIsLoadingTopics(true)

      getAllTopics({
        search: searchText,
        order_by: orderBy,
        category__id__in: categoryFilters,
      })
        .then((response) => {
          setTopics(response.data)
        })
        .finally(() => setIsLoadingTopics(false))
    }
  }, [isModalOpen, searchText, orderBy, categoryFilters])

  const handleModalOpen = useCallback(
    (_) => {
      // setIsModalOpen(modalState)
      navigate('/create-topic')
    },
    [navigate],
  )

  const onChangeCategoriesFilter = useCallback((newValue) => {
    setCategoryFilters(newValue.map((item) => item.value))
  }, [])

  const onChangeOrderBy = useCallback((item) => {
    setOrderBy(item.value)
  }, [])

  const onChangeSearchInput = useCallback((_, text) => {
    setOnChangeSearchText(text)
  }, [])

  const handleSearch = useCallback(() => {
    setSearchText(onChangeSearchText)
  }, [onChangeSearchText])

  return (
    <>
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

          <Filter
            onChangeCategoriesFilter={onChangeCategoriesFilter}
            onChangeOrderBy={onChangeOrderBy}
            onChangeSearchInput={onChangeSearchInput}
            handleSearch={handleSearch}
          />

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
                      isSave={topic.current_user_has_saved}
                    />
                  )
                })}
              </PostsContainer>
            </>
          )}
        </FeedContainer>

        <LikesContainer>
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

      {/* <CreateModalTopic
        isModalOpen={isModalOpen}
        setIsModalOpen={handleModalOpen}
      /> */}
    </>
  )
}
