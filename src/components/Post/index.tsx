import { MouseEvent, useState } from 'react'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  theme,
  Avatar,
  Divider,
  Badge,
} from 'native-base'
import { FaComment } from 'react-icons/fa'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'

import {
  AuthorContainer,
  BadgesContainer,
  CommentContainer,
  InfoContainer,
  LikesContainer,
  PostContainer,
  PostContentContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { Category } from '../../pages/Home'

interface PostProps {
  id: number
  isInsideTopic?: boolean
  isComment?: boolean
  title: string
  author: string
  content: string
  categories: Category[]
  commentsCount?: number
}

export function Post({
  id,
  isInsideTopic = false,
  isComment = false,
  title,
  author,
  content,
  categories,
  commentsCount = 0,
}: PostProps) {
  const navigate = useNavigate()

  // const author = 'Sandalo Henrique'
  // const title = 'Horários de Atendimento coordenação de Eng. de Software'

  const [likes, setLikes] = useState(105)
  const [isMark, setIsMark] = useState(false)

  function handleClickOnPost() {
    navigate(`/topic/${id}`)
  }

  function getInitialsLetters(name: string) {
    const splittedName = name.split(' ')

    if (splittedName.length >= 2) {
      const firstName = splittedName[0]
      const lastName = splittedName[splittedName.length - 1]

      const initialFirstName = firstName[0]
      const initialLastName = lastName[0]

      const iniciais =
        initialFirstName.toUpperCase() + initialLastName.toUpperCase()

      return iniciais
    } else {
      // return <IoPerson color={theme.colors.white} />
      return splittedName[0][0].toUpperCase()
    }
  }

  function handleReaction(e: MouseEvent, valueToadd: number) {
    e.preventDefault()
    setLikes(likes + valueToadd)
  }

  function handleSave(e: MouseEvent) {
    e.preventDefault()
    setIsMark(!isMark)
  }

  function renderMarkIcon() {
    switch (isMark) {
      case true:
        return <IoBookmark size="30" color={theme.colors.darkBlue['400']} />

      case false:
        return (
          <IoBookmarkOutline size="30" color={theme.colors.darkBlue['400']} />
        )
    }
  }

  return (
    <>
      <PostContainer>
        <LikesContainer isInsideTopic={isInsideTopic} isComment={isComment}>
          <button id="reactionButton" onClick={(e) => handleReaction(e, 1)}>
            <ArrowUpIcon color={theme.colors.muted['500']} size="18" />
          </button>

          <p>{likes}</p>

          <button id="reactionButton" onClick={(e) => handleReaction(e, -1)}>
            <ArrowDownIcon color={theme.colors.muted['500']} size="18" />
          </button>

          {!isComment && (
            <button id="markButton" onClick={(e) => handleSave(e)}>
              {renderMarkIcon()}
            </button>
          )}
        </LikesContainer>

        <InfoContainer>
          <PostContentContainer
            isInsideTopic={isInsideTopic}
            isComment={isComment}
          >
            {isInsideTopic && <h1 id="post-title">{title}</h1>}

            <AuthorContainer isInsideTopic={isInsideTopic}>
              <Avatar
                bg={isComment ? 'lime.600' : 'emerald.600'}
                marginRight="0.8rem"
                size={isComment ? 'xs' : 'sm'}
              >
                {getInitialsLetters(author)}
              </Avatar>
              <p>
                {author}
                {!isInsideTopic && !isComment && ` - ${title}`}
              </p>
            </AuthorContainer>

            <p
              dangerouslySetInnerHTML={{
                __html: content.replace(/\n/g, '<br>'),
              }}
            />
            {/* <p>
              {Prezad@s discentes,
              <br />
              <br />
              Prezad@s discentes, Bom dia! Espero que estejam bem. Deixo aqui
              informações sobre a dinâmica de atendimento da Coordenação de Eng.
              de Software durante o período da matrícula: - atendimento
              presencial nas 2a-feiras de 0830h às 0930h; - atendimento
              presencial nas 4a-feiras de 0830h às 1100h. Além do atendimento
              presencial, vocês têm acesso ao sistema Sigaa que disponibiliza
              canal de contato com o Coordenador para envio de mensagens.
              <br />
              <br />
              ***Não haverá atendimento via Chat Teams durante esse período.
              <br />
              *** AA
              <br />
              <br />
              Para visualizar acesse{' '}
              <a href="https://teste.com.br/teste">
                https://teste.com.br/teste
              </a>
              <br />}
            </p> */}

            {!isComment && (
              <BadgesContainer>
                {categories.map((category) => {
                  return (
                    <Badge
                      key={category.id}
                      variant="solid"
                      bg={category.color}
                      alignSelf="center"
                      size="md"
                      textDecoration="solid .8rem bold"
                    >
                      <p id="post-badge-text">{category.name}</p>
                    </Badge>
                  )
                })}
                {/* {['TCC', 'Eng. Software', 'Eng. Eletrônica', '27/07'].map(
                  (label, key) => {
                    return (
                      <Badge
                        key={key}
                        variant="solid"
                        bg={theme.colors.tertiary['500']}
                        alignSelf="center"
                        size="md"
                        textDecoration="solid .8rem bold"
                      >
                        <p id="post-badge-text">{label}</p>
                      </Badge>
                    )
                  },
                )} */}
              </BadgesContainer>
            )}

            {!isInsideTopic && !isComment && (
              <CommentContainer
                variant="outline"
                width="95%"
                size="xs"
                _text={{ fontSize: '1rem' }}
                isInsideTopic={isInsideTopic}
                onPress={isInsideTopic ? () => {} : () => handleClickOnPost()}
                rightIcon={
                  <FaComment size="22" color={theme.colors.primary['700']} />
                }
                _icon={{ marginLeft: '1rem' }}
              >
                {`Ver comentários (${commentsCount})`}
              </CommentContainer>
            )}
          </PostContentContainer>
        </InfoContainer>
      </PostContainer>

      <Divider
        alignSelf="flex-end"
        width={isComment ? '95%' : '100%'}
        marginTop={isInsideTopic ? '0rem' : '0.5rem'}
        height={isComment || !isInsideTopic ? '0.05rem' : '.1rem'}
        _light={{
          bg: 'muted.800',
        }}
        _dark={{
          bg: 'muted.50',
        }}
      />
    </>
  )
}
