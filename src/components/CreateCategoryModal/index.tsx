import { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react'
import {
  CloseButtonContainer,
  ColorIndicator,
  Content,
  ModalButtonsContainer,
  Overlay,
} from './styles'
import { UnBForumInput } from '../UnBForumInput'
import {
  Button,
  CheckCircleIcon,
  CloseIcon,
  theme,
  useToast,
} from 'native-base'
import { Category } from '../../utils/interfaces'

import { useMediaQuery } from 'usehooks-ts'
import { validateCreateCategory } from '../../utils/validateCreateCategory'
import { ToastAlert } from '../Alert'
import { createCategory, updateCategory } from '../../service/categories'

interface CreateCategoryModalProps {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
  title?: string | null
  selectedCategory?: Category | null
  isEditing?: boolean
}

export function CreateCategoryModal({
  isModalOpen,
  setIsModalOpen,
  title = null,
  selectedCategory = null,
  isEditing = false,
}: CreateCategoryModalProps) {
  const toast = useToast()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [modalVisible, setModalVisible] = useState(false)

  const [category, setCategory] = useState<Category>(
    selectedCategory || {
      id: 0,
      color: '#10B981',
      name: '',
    },
  )

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setModalVisible(isModalOpen)
    setCategory(selectedCategory || { id: 0, color: '#10B981', name: '' })
  }, [isModalOpen, selectedCategory])

  const handleTopicChange = useCallback(
    (field: string, value: string) => {
      setCategory({
        ...category,
        [field]: value,
      })
    },
    [category],
  )

  const handleCreateCategory = (event: BaseSyntheticEvent) => {
    event.preventDefault()

    const { isValid, fieldErrors } = validateCreateCategory(category)

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
    }

    setIsLoading(true)

    const updateOrCreateCategory = isEditing ? updateCategory : createCategory

    updateOrCreateCategory(category)
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="create-category-success"
                title="Categoria Criada com Sucesso"
                description={`Agora todos podem utilizar a nova categoria!`}
                status="success"
              />
            )
          },
        })

        handleClose()
        setCategory({ id: 0, color: '#10B981', name: '' })
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

  return (
    <>
      {modalVisible && (
        <Overlay isOpen={modalVisible} onClick={handleClose}>
          <Content isOpen={modalVisible} onClick={(e) => e.stopPropagation()}>
            <CloseButtonContainer onClick={handleClose}>
              <CloseIcon size="2rem" color={theme.colors.primary['50']} />
            </CloseButtonContainer>

            <h1>{title || 'Nova categoria'}</h1>

            <UnBForumInput
              name="name"
              onChange={handleTopicChange}
              fontSize="1.2rem"
              value={category.name || undefined}
              size="lg"
              inputType="text"
              accessibilityLabel="Nome da Categoria"
              label="Nome da Categoria"
              placeholder="Digite o nome da categoria..."
            />

            <UnBForumInput
              name="color"
              onChange={handleTopicChange}
              fontSize="1.2rem"
              value={category.color}
              size="lg"
              inputType="text"
              accessibilityLabel="Cor da Categoria (com #)"
              label="Cor da Categoria (com #)"
              placeholder="Escolha a cor da categoria #000000..."
            />

            <ColorIndicator color={category.color} />

            <ModalButtonsContainer>
              <Button
                id="create-topic-button"
                onPress={(e) => handleCreateCategory(e)}
                bgColor={theme.colors.success['600']}
                size={isMobile ? 'xs' : 'md'}
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
