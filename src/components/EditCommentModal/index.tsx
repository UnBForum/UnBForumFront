import { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react'
import {
  CloseButtonContainer,
  Content,
  ModalButtonsContainer,
  Overlay,
} from './styles'
import { UnBForumTextArea } from '../UnBForumTextArea'
import {
  Button,
  CheckCircleIcon,
  CloseIcon,
  theme,
  useToast,
} from 'native-base'
import { useMediaQuery } from 'usehooks-ts'
import { valiadateCreateComment } from '../../utils/valiadateCreateComment'
import { ToastAlert } from '../Alert'
import { updateComment } from '../../service/comment'

interface CommentModal {
  content: string
}

interface EditCommentModalProps {
  isModalOpen: boolean
  comment?: CommentModal | null
  setIsModalOpen: (isOpen: boolean) => void
  isEditing?: boolean
  commentId?: number | null
  topicId?: number | null
}

export function EditCommentModal({
  isModalOpen,
  comment = null,
  setIsModalOpen,
  isEditing = true,
  commentId = null,
  topicId = null,
}: EditCommentModalProps) {
  const toast = useToast()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [modalVisible, setModalVisible] = useState(false)

  const [commentData, setCommentData] = useState<CommentModal>(
    comment || {
      content: '',
    },
  )

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(commentData)
  }, [commentData])

  useEffect(() => {
    setModalVisible(isModalOpen)
    setCommentData(comment || { content: '' })
  }, [isModalOpen, comment])

  const handleTopicChange = useCallback(
    (field: string, value: string) => {
      setCommentData({
        ...commentData,
        [field]: value,
      })
    },
    [commentData],
  )

  const handleEditComment = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const { isValid, fieldErrors } = valiadateCreateComment(commentData.content)

    console.log({ isValid, commentId, topicId })

    if (!isValid || commentId === null || topicId === null) {
      toast.show({
        placement: 'top-right',
        render: () => {
          return (
            <ToastAlert
              id="create-topic-error"
              title="Campos Inválidos"
              description={`Os sequintes campos estão incorretos: ${fieldErrors.reduce(
                (prev, curr, idx) => {
                  if (idx === 0) return `'${curr}'`
                  if (idx === fieldErrors.length - 1)
                    return `${prev} e '${curr}'`
                  return `${prev}, '${curr}'`
                },
                '',
              )}`}
              status=""
            />
          )
        },
      })
      return
    }

    setIsLoading(true)

    updateComment(commentId, topicId, commentData.content)
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="edit-comment-success"
                title="Comentário Editado com Sucesso"
                description={`Agora todos podem ver seu comentário com as edições!`}
                status="success"
              />
            )
          },
        })

        handleClose()
        setCommentData({ content: '' })
      })
      .catch((error) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            let msg = ''

            if (typeof error.response.data.detail === 'object') {
              msg = error.response.data.detail[0].msg.split(', ')[1]
            } else {
              msg = error.response.data.detail
            }

            return (
              <ToastAlert
                id="edit-comment-error"
                title="Campos Inválidos"
                description={`Erro: ${msg}`}
                status=""
              />
            )
          },
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleClose = () => {
    setModalVisible(false)
    setTimeout(() => {
      setIsModalOpen(false)
    }, 300) // Tempo da transição em milissegundos (300ms no exemplo)
  }

  return (
    <>
      {modalVisible && (
        <Overlay isOpen={modalVisible} onClick={handleClose}>
          <Content isOpen={modalVisible} onClick={(e) => e.stopPropagation()}>
            <CloseButtonContainer onClick={handleClose}>
              <CloseIcon size="2rem" color={theme.colors.white} />
            </CloseButtonContainer>

            <h1>Editar Comentário</h1>

            <UnBForumTextArea
              name="content"
              onChange={handleTopicChange}
              value={commentData.content || undefined}
              fontSize="1.2rem"
              size="lg"
              inputType="text"
              accessibilityLabel="Comentário"
              label="Comentário"
              placeholder="Digite o comentário aqui..."
            />

            <ModalButtonsContainer>
              <Button
                id="create-topic-button"
                onPress={(e) => handleEditComment(e)}
                bgColor={theme.colors.success['600']}
                size={isMobile ? 'xs' : 'md'}
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '700' }}
                isLoadingText="Editando..."
                isLoading={isLoading}
                rightIcon={<CheckCircleIcon />}
              >
                Editar
              </Button>
            </ModalButtonsContainer>

            {/* <button onClick={handleClose}>Fechar</button> */}
          </Content>
        </Overlay>
      )}
    </>
  )
}
