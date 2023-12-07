// @ts-nocheck
import { Button, theme, AddIcon, FavouriteIcon } from 'native-base'
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

export interface Category {
  id: number
  color: string
  name: string
}

export interface Topic {
  categories: Category[]
  content: string
  id: number
  is_fixed: boolean
  title: string
  author: BackendUser
  comments_count: number
}

export function Home() {
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
  }, [isModalOpen, searchText, orderBy, categoryFilters])

  const handleModalOpen = useCallback((modalState: boolean) => {
    setIsModalOpen(modalState)
  }, [])

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
    <HomeContainer>
      <FeedContainer>
        <Button
          bgColor={theme.colors.success['600']}
          size="lg"
          borderRadius="4px"
          rightIcon={<AddIcon />}
          onPress={() => handleModalOpen(true)}
        >
          <p>Criar Tópico</p>
        </Button>

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
                    content={topic.content}
                    author={topic.author.name}
                    commentsCount={topic.comments_count}
                    categories={topic.categories}
                  />
                )
              })}
            </PostsContainer>
            {/* <PostsContainer>
          {Array.from({ length: 20 }, (_, i) => i).map((i) => {
            return <Post key={i} id={i} />
          })}
        </PostsContainer> */}
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

      <CreateModalTopic
        isModalOpen={isModalOpen}
        setIsModalOpen={handleModalOpen}
      />
    </HomeContainer>
  )
}
