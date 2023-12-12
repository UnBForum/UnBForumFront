import { useEffect, useState } from 'react'
import { Logo } from '../../assets/Logo'
import { SavedTopicsContainer, SavedTopicsListContainer } from './styles'
import { Topic } from '../Home'
import { Loading } from '../../components/Loading'
import { getUserSavedTopics } from '../../service/topics'
import { Post } from '../../components/Post'
import { Button, theme } from 'native-base'

import { TbReload } from 'react-icons/tb'
import { useMediaQuery } from 'usehooks-ts'

export function SavedTopics() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [isLoadingSavedTopics, setIsLoadingSavedTopics] = useState(false)
  const [savedTopics, setSavedTopics] = useState<Topic[]>([])

  useEffect(() => {
    handleGetSavedTopics().then()
  }, [])

  const handleGetSavedTopics = async () => {
    setIsLoadingSavedTopics(true)

    getUserSavedTopics()
      .then((response) => {
        setSavedTopics(response.data)
      })
      .finally(() => {
        setIsLoadingSavedTopics(false)
      })
  }

  return (
    <>
      <SavedTopicsContainer>
        <div className="logo-saved-topics-container">
          <Logo />
        </div>

        <section className="saved-topics-list">
          <div className="reload-saved-topics">
            <h1 className="saved-topics-title">Meus Tópicos Salvos</h1>

            <Button
              size={isMobile ? 'sm' : 'lg'}
              rightIcon={<TbReload size={22} color={theme.colors.white} />}
              onPress={handleGetSavedTopics}
            >
              Recarregar
            </Button>
          </div>

          <SavedTopicsListContainer>
            {isLoadingSavedTopics ? (
              <Loading accessibilityLabel="Carregando os tópicos salvos..." />
            ) : (
              <>
                {savedTopics.map((topic) => {
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
                      isSave={topic.current_user_has_saved || true}
                    />
                  )
                })}
              </>
            )}
          </SavedTopicsListContainer>
        </section>
      </SavedTopicsContainer>
    </>
  )
}
