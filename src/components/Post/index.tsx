import { MouseEvent, useCallback, useEffect, useState } from 'react'
import {
  ArrowUpIcon,
  ArrowDownIcon,
  theme,
  Avatar,
  Divider,
  Badge,
  useToast,
  DeleteIcon,
} from 'native-base'
import { FaComment } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
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
import {
  deleteUserTopic,
  fixedTopic,
  makeDownvoteTopic,
  makeUpvoteTopic,
  saveTopic,
  unsaveTopic,
} from '../../service/topics'
import { ADMIN_SCOPE, MODERATOR_SCOPE, useUser } from '../../hooks/user'
import { ToastAlert } from '../Alert'
import {
  deleteComment,
  fixComment,
  makeDownvoteComment,
  makeUpvoteComment,
} from '../../service/comment'
import { FileData } from '../../utils/interfaces'
import { createFileUrlDownload } from '../../utils/createFileUrlDownload'
import { getInitialsLetters } from '../../utils/getInitialsLetter'
import { Dialog } from '../Dialog'
import { CreateModalTopic } from '../CreateTopicModal'
import { TbPinned } from 'react-icons/tb'
import { Loading } from '../Loading'

interface PostProps {
  id: number
  isInsideTopic?: boolean
  isComment?: boolean
  title?: string
  author: string
  authorEmail: string
  topicId?: number | null
  files?: FileData[]
  content: string
  currentRating?: number
  rating?: number
  categories?: Category[]
  commentsCount?: number
  isSave?: boolean
  isFixed?: boolean
  isMyTopicScreen?: boolean
  deleteTopicCallback?: (id: number) => Promise<void>
  fixedTopicCallback?: () => Promise<void>
}

export function Post({
  id,
  isInsideTopic = false,
  isComment = false,
  title = '',
  author,
  authorEmail,
  content,
  topicId = null,
  currentRating = 0,
  rating = 0,
  files = [],
  categories = [],
  commentsCount = 0,
  isSave = false,
  isMyTopicScreen = false,
  deleteTopicCallback = (_) => new Promise(() => null),
  fixedTopicCallback = () => new Promise(() => null),
  isFixed = false,
}: PostProps) {
  const { token, checkScopePermissions, email } = useUser()
  const toast = useToast()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [likes, setLikes] = useState(rating)
  const [isMark, setIsMark] = useState(isSave)
  const [isPinned, setIsPinned] = useState(isFixed)
  const [currentUserRating, setCurrentUserRating] = useState(currentRating)

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isLoadingDeleteTopic, setIsLoadingDeleteTopic] = useState(false)

  const [isLoadingFixedTopic, setIsLoadingFixedTopic] = useState(false)

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  useEffect(() => {
    setCurrentUserRating(currentRating)
    setLikes(rating)
    setIsMark(isSave)
    setIsPinned(isFixed)
  }, [currentRating, rating, isSave, isFixed])

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

    if (!token) {
      renderAlertErrorForUnloggedUser()
      return
    }

    if (!isMark) {
      saveTopic(id)
        .then((_) => {
          setIsMark(true)
        })
        .catch((_) => {})
    } else {
      unsaveTopic(id)
        .then((_) => {
          setIsMark(false)
        })
        .catch((_) => {})
    }
  }

  function handleDeleteUserTopic() {
    if (!token) {
      renderAlertErrorForUnloggedUser()
      return
    }

    setIsLoadingDeleteTopic(true)

    if (isComment) {
      deleteComment(id, topicId)
        .then((_) => {
          setIsDeleteDialogOpen(false)
          deleteTopicCallback(id).then()

          toast.show({
            placement: 'top-right',
            render: () => {
              return (
                <ToastAlert
                  id="delete-topic-success"
                  title="Comentário removido!"
                  description="Comentário removido com sucesso!"
                  status="success"
                />
              )
            },
          })
        })
        .catch((_) => {})
        .finally(() => {
          setIsLoadingDeleteTopic(false)
        })
    } else {
      deleteUserTopic(id)
        .then((_) => {
          setIsDeleteDialogOpen(false)
          deleteTopicCallback(id).then()

          toast.show({
            placement: 'top-right',
            render: () => {
              return (
                <ToastAlert
                  id="delete-topic-success"
                  title="Tópico removido!"
                  description="Tópico removido com sucesso!"
                  status="success"
                />
              )
            },
          })
        })
        .catch((_) => {})
        .finally(() => {
          setIsLoadingDeleteTopic(false)
        })
    }
  }

  function handleFixedTopic() {
    const previousFixedState = isPinned
    if (!token) {
      renderAlertErrorForUnloggedUser()
      return
    }

    setIsLoadingFixedTopic(true)

    if (isComment) {
      fixComment(id, topicId)
        .then((response) => {
          fixedTopicCallback().then()
          setIsPinned(response.data.is_fixed)

          toast.show({
            placement: 'top-right',
            render: () => {
              return (
                <ToastAlert
                  id="fixed-topic-success"
                  title={
                    previousFixedState
                      ? 'Comentário Desafixado'
                      : 'Comentário fixado!'
                  }
                  description={
                    previousFixedState
                      ? 'Comentário desafixado com sucesso!'
                      : 'Comentário fixado com sucesso!'
                  }
                  status="success"
                />
              )
            },
          })
        })
        .catch((_) => {})
        .finally(() => {
          setIsLoadingFixedTopic(false)
        })
    } else {
      fixedTopic(id)
        .then((response) => {
          fixedTopicCallback().then()
          setIsPinned(response.data.is_fixed)

          toast.show({
            placement: 'top-right',
            render: () => {
              return (
                <ToastAlert
                  id="fixed-topic-success"
                  title={
                    previousFixedState ? 'Tópico Desafixado' : 'Tópico fixado!'
                  }
                  description={
                    previousFixedState
                      ? 'Tópico desafixado com sucesso!'
                      : 'Tópico fixado com sucesso!'
                  }
                  status="success"
                />
              )
            },
          })
        })
        .catch((_) => {})
        .finally(() => {
          setIsLoadingFixedTopic(false)
        })
    }
  }

  const handleModalOpen = useCallback(
    (modalState: boolean) => {
      setIsEditModalOpen(modalState)

      if (!modalState) {
        deleteTopicCallback(id).then()
      }
    },
    [deleteTopicCallback, id],
  )

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
          <div id="common-reactions">
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
          </div>

          {(checkScopePermissions(ADMIN_SCOPE) ||
            checkScopePermissions(MODERATOR_SCOPE)) && (
            <button
              id="pinnedButton"
              onClick={() => handleFixedTopic()}
              style={{
                border: isPinned
                  ? `none`
                  : `1px solid ${theme.colors.yellow['500']}`,
                backgroundColor: isPinned
                  ? `${theme.colors.yellow['500']}`
                  : `${theme.colors.white}`,
              }}
            >
              {isLoadingFixedTopic ? (
                <Loading
                  isInsideButton
                  accessibilityLabel="Fixando tópico..."
                />
              ) : (
                <TbPinned
                  color={
                    isPinned ? theme.colors.white : theme.colors.yellow['500']
                  }
                  size={isMobile ? '22' : '30'}
                />
              )}
            </button>
          )}

          <div
            id="user-buttons"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.2rem',
            }}
          >
            {((token && isMyTopicScreen) ||
              checkScopePermissions(ADMIN_SCOPE) ||
              checkScopePermissions(MODERATOR_SCOPE)) && (
              <button
                id="deleteButton"
                onClick={() => setIsDeleteDialogOpen(true)}
              >
                <DeleteIcon
                  color={theme.colors.white}
                  size={isMobile ? '22' : '30'}
                />
              </button>
            )}

            {((token && isMyTopicScreen) || email === authorEmail) && (
              <button id="editButton" onClick={() => handleModalOpen(true)}>
                <MdEdit
                  color={theme.colors.white}
                  size={isMobile ? '22' : '30'}
                />
              </button>
            )}
          </div>
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

      <Dialog
        isOpen={isDeleteDialogOpen}
        handleAccept={handleDeleteUserTopic}
        handleClose={() => setIsDeleteDialogOpen(false)}
        question={
          isComment
            ? 'Tem certeza que deseja remover seu comentário?'
            : 'Tem certeza que deseja remover seu tópico?'
        }
        acceptText="Remover"
        isLoadingAcceptButton={isLoadingDeleteTopic}
        loadingAcceptButtonText="Removendo..."
      />

      <CreateModalTopic
        isModalOpen={isEditModalOpen}
        setIsModalOpen={handleModalOpen}
        isEditing={true}
        isEditingComment={isComment}
        topic={{
          title,
          categories: categories.map((c) => c.id),
          files,
          content,
        }}
        id={id}
        topicId={topicId}
      />
    </>
  )
}
