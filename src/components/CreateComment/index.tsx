import { Avatar, Button, Divider, theme, useToast } from 'native-base'
import { CommentInputContainer, CreateCommentContainer } from './styles'
import { getInitialsLetters } from '../../utils/getInitialsLetter'
import { useUser } from '../../hooks/user'
import { UnBForumTextArea } from '../UnBForumTextArea'
import { useMediaQuery } from 'usehooks-ts'
import { LuSendHorizonal } from 'react-icons/lu'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { createComment } from '../../service/comment'
import { valiadateCreateComment } from '../../utils/valiadateCreateComment'
import { ToastAlert } from '../Alert'

interface CreateCommentProps {
  topicId: number
  onCommentCreated: () => void
}

export const CreateComment: React.FC<CreateCommentProps> = ({
  topicId,
  onCommentCreated,
}) => {
  const { name } = useUser()
  const toast = useToast()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [comment, setComment] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => console.log({ comment }), [comment])

  const handleChangeComment = (_: string, text: string) => {
    setComment(text)
  }

  const handleCreateComment = (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const { isValid } = valiadateCreateComment(comment)

    if (!isValid) {
      toast.show({
        placement: 'top-right',
        render: () => {
          return (
            <ToastAlert
              id="create-comment-error"
              title="Campos Inválidos"
              description="O comentário não pode ser feito sem conteúdo!"
              status=""
            />
          )
        },
      })
      return
    }

    setIsLoading(true)

    createComment(comment.trim(), topicId)
      .then((_) => {
        setComment('')

        onCommentCreated()
      })
      .catch((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="create-topic-error"
                title="Opa"
                description={`Erro ao criar comentário`}
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

  return (
    <CreateCommentContainer>
      <CommentInputContainer>
        <Avatar
          bg={'lime.600'}
          marginRight="0.8rem"
          size={isMobile ? 'xs' : 'sm'}
        >
          {getInitialsLetters(name)}
        </Avatar>

        <UnBForumTextArea
          name="content"
          onChange={handleChangeComment}
          fontSize="1.2rem"
          size="lg"
          value={comment}
          isComment={true}
          inputType="text"
          accessibilityLabel="Comentário"
          label=""
          placeholder="Digite o comentário aqui..."
        />
      </CommentInputContainer>

      <Button
        alignSelf="flex-end"
        size={isMobile ? 'sm' : 'md'}
        rightIcon={<LuSendHorizonal size={20} color={theme.colors.white} />}
        onPress={(e) => handleCreateComment(e)}
        isLoading={isLoading}
        isLoadingText="Comentando..."
      >
        Comentar
      </Button>

      <Divider />
    </CreateCommentContainer>
  )
}
