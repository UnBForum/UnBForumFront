import { useEffect, useState } from 'react'
import { Logo } from '../../assets/Logo'
import { MyTopicsContainer, MyTopicsListContainer } from './styles'
import { Topic } from '../Home'
import { Loading } from '../../components/Loading'
import { getUserTopics } from '../../service/topics'
import { Post } from '../../components/Post'
import { Button, theme } from 'native-base'

import { TbReload } from 'react-icons/tb'
import { useMediaQuery } from 'usehooks-ts'

export function MyTopics() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [isLoadingMyTopics, setIsLoadingMyTopics] = useState(false)
  const [myTopics, setMyTopics] = useState<Topic[]>([])

  useEffect(() => {
    handleGetMyTopics().then()
  }, [])

  const handleGetMyTopics = async () => {
    setIsLoadingMyTopics(true)

    getUserTopics()
      .then((response) => {
        setMyTopics(response.data)
      })
      .finally(() => {
        setIsLoadingMyTopics(false)
      })
  }

  return (
    <>
      <MyTopicsContainer>
        <div className="logo-my-topics-container">
          <Logo />
        </div>

        <section className="my-topics-list">
          <div className="reload-my-topics">
            <h1 className="my-topics-title">Meus Tópicos</h1>

            <Button
              size={isMobile ? 'sm' : 'lg'}
              rightIcon={<TbReload size={22} color={theme.colors.white} />}
              onPress={handleGetMyTopics}
            >
              Recarregar
            </Button>
          </div>

          <MyTopicsListContainer>
            {isLoadingMyTopics ? (
              <Loading accessibilityLabel="Carregando os meus tópicos..." />
            ) : (
              <>
                {myTopics.map((topic) => {
                  return (
                    <Post
                      key={topic.id}
                      id={topic.id}
                      title={topic.title}
                      rating={topic.rating}
                      files={topic.files}
                      currentRating={topic.current_user_rating}
                      content={topic.content}
                      authorEmail={topic.author.email}
                      author={topic.author.name}
                      commentsCount={topic.comments_count}
                      categories={topic.categories}
                      isSave={topic.current_user_has_saved || false}
                      deleteTopicCallback={handleGetMyTopics}
                      isMyTopicScreen={true}
                      isComment={false}
                    />
                  )
                })}
              </>
            )}
          </MyTopicsListContainer>
        </section>
      </MyTopicsContainer>
    </>
  )
}
