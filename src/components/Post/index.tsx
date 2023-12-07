import { MouseEvent, useEffect, useState } from 'react'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  theme,
  Avatar,
  Divider,
  Badge,
  useToast,
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
import { useMediaQuery } from 'usehooks-ts'
import { makeDownvoteTopic, makeUpvoteTopic } from '../../service/topics'
import { useUser } from '../../hooks/user'
import { ToastAlert } from '../Alert'
import { makeDownvoteComment, makeUpvoteComment } from '../../service/comment'
import { FileData } from '../../utils/interfaces'
import { createFileUrlDownload } from '../../utils/createFileUrlDownload'
import { getInitialsLetters } from '../../utils/getInitialsLetter'

interface PostProps {
  id: number
  isInsideTopic?: boolean
  isComment?: boolean
  title?: string
  author: string
  topicId?: number | null
  files?: FileData[]
  content: string
  currentRating?: number
  rating?: number
  categories?: Category[]
  commentsCount?: number
}

export function Post({
  id,
  isInsideTopic = false,
  isComment = false,
  title = '',
  author,
  content,
  topicId = null,
  currentRating = 0,
  rating = 0,
  files = [],
  categories = [],
  commentsCount = 0,
}: PostProps) {
  const { token } = useUser()
  const toast = useToast()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [likes, setLikes] = useState(rating)
  const [isMark, setIsMark] = useState(false)
  const [currentUserRating, setCurrentUserRating] = useState(currentRating)

  useEffect(() => {
    setCurrentUserRating(currentRating)
    setLikes(rating)
  }, [currentRating, rating])

  function handleClickOnPost() {
    navigate(`/topic/${id}`)
  }

  const renderAlertErrorForUnloggedUser = () => {
    toast.show({
      placement: 'top-right',
      render: () => {
        return (
          <ToastAlert
            id="user-unlogged-error"
            title="Opa!"
            description={`Para interagir com um tópico ou comentário, você precisa fazer login!`}
            status=""
          />
        )
      },
    })
  }

  async function handleReaction(e: MouseEvent, valueToadd: number) {
    e.preventDefault()

    if (!token) {
      renderAlertErrorForUnloggedUser()
      return
    }

    if (valueToadd > 0) {
      const response = await (isComment
        ? makeUpvoteComment(id, topicId)
        : makeUpvoteTopic(id))

      setLikes(response.data.rating)

      setCurrentUserRating(currentUserRating > 0 ? 0 : 1)
    } else {
      const response = await (isComment
        ? makeDownvoteComment(id, topicId)
        : makeDownvoteTopic(id))

      setLikes(response.data.rating)

      setCurrentUserRating(currentUserRating < 0 ? 0 : -1)
    }
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
            <ArrowUpIcon
              color={
                currentUserRating > 0
                  ? theme.colors.tertiary['500']
                  : theme.colors.muted['500']
              }
              size="18"
            />
          </button>

          <p>{likes}</p>

          <button id="reactionButton" onClick={(e) => handleReaction(e, -1)}>
            <ArrowDownIcon
              color={
                currentUserRating < 0
                  ? theme.colors.tertiary['500']
                  : theme.colors.muted['500']
              }
              size="18"
            />
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

            {files.length > 0 && <Divider width="80%" />}
            {files.map((f, i) => (
              <span key={f.id}>
                Para acessar o arquivo {`${i + 1}: `}
                <a
                  href={createFileUrlDownload(f)}
                  target="_blank"
                  rel="noreferrer"
                >
                  clique aqui
                </a>
              </span>
            ))}

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
              </BadgesContainer>
            )}

            {!isInsideTopic && !isComment && (
              <CommentContainer
                variant="outline"
                width="95%"
                size="xs"
                _text={{ fontSize: isMobile ? '0.8rem' : '1rem' }}
                isInsideTopic={isInsideTopic}
                onPress={isInsideTopic ? () => {} : () => handleClickOnPost()}
                rightIcon={
                  <FaComment
                    size={isMobile ? '18' : '20'}
                    color={theme.colors.primary['700']}
                  />
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
