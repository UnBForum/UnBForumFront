import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  CloseButtonContainer,
  Content,
  ModalButtonsContainer,
  Overlay,
} from './styles'
import { UnBForumInput } from '../UnBForumInput'
import { UnBForumTextArea } from '../UnBForumTextArea'
import { UnBForumInputFile } from '../UnBForumInputFile'
import {
  AddIcon,
  Button,
  CheckCircleIcon,
  CloseIcon,
  theme,
  useToast,
} from 'native-base'
import { TopicData } from '../../utils/interfaces'
import { validateCreateTopic } from '../../utils/validateCreateTopic'
import { ToastAlert } from '../Alert'
import { createTopic } from '../../service/topics'

interface CreateTopicModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}
// // Olá a tod@s, espero que estejam bem e com saúde!

// Amanhã será um grande dia para todos nós, dia de alegria e celebração, vamos juntos!

// Aguardo todos lá.
// Até logo!
export function CreateModalTopic({
  isModalOpen,
  setIsModalOpen,
}: CreateTopicModalProps) {
  const toast = useToast()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [modalVisible, setModalVisible] = useState(false)

  // const [files, setFiles] = useState<string[]>([])

  const [topicData, setTopicData] = useState<TopicData>({
    title: '',
    content: '',
    files: [],
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => console.log(topicData), [topicData])

  useEffect(() => {
    setModalVisible(isModalOpen)
  }, [isModalOpen])

  const handleTopicChange = useCallback(
    (field: string, value: string) => {
      setTopicData({
        ...topicData,
        [field]: value,
      })
    },
    [topicData],
  )

  const handleCreateTopic = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const { isValid, fieldErrors } = validateCreateTopic(topicData)

    if (!isValid) {
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

    createTopic(topicData)
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="create-topic-success"
                title="Tópico Criado com Sucesso"
                description={`Agora todos podem ver seu novo tópico!`}
                status="success"
              />
            )
          },
        })

        handleClose()
        setTopicData({ title: '', content: '', files: [] })
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
                id="create-topic-error"
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

  const handleAddFile = useCallback(
    (fileName: string) => {
      setTopicData({ ...topicData, files: [...topicData.files, fileName] })
    },
    [topicData],
  )

  const handleDeleteFile = useCallback(
    (fileName: string) => {
      const remainingFiles = topicData.files.filter((f) => f !== fileName)

      setTopicData({ ...topicData, files: remainingFiles })
    },
    [topicData],
  )

  const handleAddFileButtonClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <>
      {modalVisible && (
        <Overlay isOpen={modalVisible} onClick={handleClose}>
          <Content isOpen={modalVisible} onClick={(e) => e.stopPropagation()}>
            <CloseButtonContainer onClick={handleClose}>
              <CloseIcon size="2rem" color={theme.colors.primary['50']} />
            </CloseButtonContainer>

            <h1>Novo Tópico</h1>

            <UnBForumInput
              name="title"
              onChange={handleTopicChange}
              fontSize="1.2rem"
              size="lg"
              inputType="text"
              accessibilityLabel="Título"
              label="Título"
              placeholder="Digite o título do tópico..."
            />

            <UnBForumTextArea
              name="content"
              onChange={handleTopicChange}
              fontSize="1.2rem"
              size="lg"
              inputType="text"
              accessibilityLabel="Conteúdo"
              label="Conteúdo"
              placeholder="Digite o conteúdo do tópico aqui..."
            />

            <UnBForumInputFile
              filesUploadLimit={2}
              fileInputRef={fileInputRef}
              handleAddFile={handleAddFile}
              handleDeleteFile={handleDeleteFile}
              files={topicData.files}
            />

            <ModalButtonsContainer>
              <Button
                onPress={() => handleAddFileButtonClick()}
                size="md"
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '400' }}
                rightIcon={<AddIcon />}
              >
                Adicionar arquivos
              </Button>

              <Button
                id="create-topic-button"
                onPress={(e) => handleCreateTopic(e)}
                bgColor={theme.colors.success['600']}
                size="md"
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '700' }}
                isLoadingText="Criando..."
                isLoading={isLoading}
                rightIcon={<CheckCircleIcon />}
              >
                Criar
              </Button>
            </ModalButtonsContainer>

            {/* <button onClick={handleClose}>Fechar</button> */}
          </Content>
        </Overlay>
      )}
    </>
  )
}
