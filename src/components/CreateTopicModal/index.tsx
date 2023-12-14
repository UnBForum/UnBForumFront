import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  CategoriesContainer,
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
import Select, { MultiValue, StylesConfig } from 'react-select'
import { Category, FileData, TopicData } from '../../utils/interfaces'
import { validateCreateTopic } from '../../utils/validateCreateTopic'
import { ToastAlert } from '../Alert'
import { createTopic, editTopic } from '../../service/topics'
import { formatCreateTopic } from '../../utils/formatCreateTopic'
import { getAllCategories } from '../../service/categories'
import chroma from 'chroma-js'
import { useMediaQuery } from 'usehooks-ts'

interface CreateTopicModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  isEditing?: boolean
  topic?: {
    title: string
    categories: number[]
    files: FileData[]
    content: string
  } | null
  id?: number | null
}

interface OptionsType {
  value: string
  label: string
  color: string
}

// // Olá a tod@s, espero que estejam bem e com saúde!

// Amanhã será um grande dia para todos nós, dia de alegria e celebração, vamos juntos!

// Aguardo todos lá.
// Até logo!
export function CreateModalTopic({
  isModalOpen,
  setIsModalOpen,
  isEditing = false,
  topic = null,
  id = null,
}: CreateTopicModalProps) {
  const toast = useToast()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [modalVisible, setModalVisible] = useState(false)

  const [topicData, setTopicData] = useState<TopicData>(
    topic || {
      title: '',
      content: '',
      files: [],
      categories: [],
    },
  )

  const [isLoading, setIsLoading] = useState(false)
  const [isAddFileLoading, setIsAddFileLoading] = useState(false)

  const [categories, setCategories] = useState<Category[]>([])

  const colourStyles: StylesConfig<OptionsType> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.colors.white,
    }),
    option: (styles, { data, isMulti, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? isMulti
              ? data.color
              : color.alpha(0.2).css()
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? isMulti
              ? chroma.contrast(color, 'white') > 2
                ? 'white'
                : 'black'
              : data.color
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      }
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      }
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
    input: (styles) => ({
      ...styles,
      'input:focus': {
        boxShadow: 'none',
      },
    }),
  }

  useEffect(() => {
    if (isModalOpen) {
      getAllCategories().then((response) => {
        setCategories(response.data)
      })
    }
  }, [isModalOpen])

  useEffect(() => {
    setModalVisible(isModalOpen)
    setTopicData(topic || { title: '', content: '', files: [], categories: [] })
  }, [isModalOpen, topic])

  const handleTopicChange = useCallback(
    (field: string, value: string | MultiValue<OptionsType>) => {
      if (Array.isArray(value)) {
        setTopicData({
          ...topicData,
          [field]: value.map((item) => Number(item.value)),
        })
      } else {
        setTopicData({
          ...topicData,
          [field]: value,
        })
      }
    },
    [topicData],
  )

  const handleIsAddFileLoading = useCallback((loading: boolean) => {
    setIsAddFileLoading(loading)
  }, [])

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

    createTopic(formatCreateTopic(topicData))
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
        setTopicData({ title: '', content: '', files: [], categories: [] })
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

  const handleEditTopic = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const { isValid, fieldErrors } = validateCreateTopic(topicData)

    if (!isValid || id === null) {
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

    editTopic(formatCreateTopic(topicData), id)
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="edit-topic-success"
                title="Tópico Editado com Sucesso"
                description={`Agora todos podem ver seu tópico com as edições!`}
                status="success"
              />
            )
          },
        })

        handleClose()
        setTopicData({ title: '', content: '', files: [], categories: [] })
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
                id="edit-topic-error"
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
    (file: FileData) => {
      setTopicData({ ...topicData, files: [...topicData.files, file] })
    },
    [topicData],
  )

  const handleDeleteFile = useCallback(
    (fileName: string) => {
      const remainingFiles = topicData.files.filter((f) => f.name !== fileName)

      setTopicData({ ...topicData, files: remainingFiles })
    },
    [topicData],
  )

  const handleAddFileButtonClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const getSelectedCategories = () => {
    const checkCategoryIsSelected = (categoryToCheck: number) => {
      return categories.filter((c) => c.id === categoryToCheck)[0]
    }

    let formattedSelectCategories: OptionsType[] = []
    const selectedCategories = topicData.categories.map((c) =>
      checkCategoryIsSelected(c),
    )

    if (selectedCategories.filter((c) => c !== undefined).length > 0) {
      formattedSelectCategories = selectedCategories.map(
        (category): OptionsType => ({
          value: category.id.toString(),
          label: category.name,
          color: category.color,
        }),
      )
    }

    return formattedSelectCategories
  }

  return (
    <>
      {modalVisible && (
        // <Overlay isOpen={modalVisible}>
        <Overlay isOpen={modalVisible} onClick={handleClose}>
          <Content isOpen={modalVisible} onClick={(e) => e.stopPropagation()}>
            <CloseButtonContainer onClick={handleClose}>
              <CloseIcon size="2rem" color={theme.colors.white} />
            </CloseButtonContainer>

            <h1>{isEditing ? 'Editar Tópico' : 'Novo Tópico'}</h1>

            <UnBForumInput
              name="title"
              onChange={handleTopicChange}
              value={topicData.title || undefined}
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
              value={topicData.content || undefined}
              fontSize="1.2rem"
              size="lg"
              inputType="text"
              accessibilityLabel="Conteúdo"
              label="Conteúdo"
              placeholder="Digite o conteúdo do tópico aqui..."
            />

            <CategoriesContainer>
              <Select
                isMulti
                closeMenuOnSelect={false}
                value={getSelectedCategories()}
                options={categories.map(
                  (category): OptionsType => ({
                    value: category.id.toString(),
                    label: category.name,
                    color: category.color,
                  }),
                )}
                styles={colourStyles}
                onChange={(newValue) =>
                  handleTopicChange('categories', newValue)
                }
                placeholder="Adicionar categorias"
              />
            </CategoriesContainer>

            <UnBForumInputFile
              filesUploadLimit={2}
              fileInputRef={fileInputRef}
              handleAddFile={handleAddFile}
              handleDeleteFile={handleDeleteFile}
              files={topicData.files}
              setIsAddFileLoading={handleIsAddFileLoading}
            />

            <ModalButtonsContainer>
              <Button
                onPress={() => handleAddFileButtonClick()}
                size={isMobile ? 'xs' : 'md'}
                isLoading={isAddFileLoading}
                isLoadingText="Adicionando arquivo..."
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '400' }}
                rightIcon={<AddIcon />}
              >
                Adicionar arquivos
              </Button>

              <Button
                id="create-topic-button"
                onPress={
                  isEditing
                    ? (e) => handleEditTopic(e)
                    : (e) => handleCreateTopic(e)
                }
                bgColor={theme.colors.success['600']}
                size={isMobile ? 'xs' : 'md'}
                isDisabled={isAddFileLoading}
                borderRadius="4px"
                _text={{ fontSize: '1rem', fontWeight: '700' }}
                isLoadingText={isEditing ? 'Editando...' : 'Criando...'}
                isLoading={isLoading}
                rightIcon={<CheckCircleIcon />}
              >
                {isEditing ? 'Editar' : 'Criar'}
              </Button>
            </ModalButtonsContainer>

            {/* <button onClick={handleClose}>Fechar</button> */}
          </Content>
        </Overlay>
      )}
    </>
  )
}
