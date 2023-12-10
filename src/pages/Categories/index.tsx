import { AddIcon, Button, DeleteIcon, theme, useToast } from 'native-base'
import { Logo } from '../../assets/Logo'
import {
  CategoriesContainer,
  CategoriesListContainer,
  CategoryButtonsContainer,
  ColorIndicator,
  DeleteButtonContainer,
  EditButtonContainer,
} from './styles'
import { FaEdit } from 'react-icons/fa'
import { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react'
import { deleteCategory, getAllCategories } from '../../service/categories'
import { Category } from '../../utils/interfaces'
import { CreateCategoryModal } from '../../components/CreateCategoryModal'
import { Loading } from '../../components/Loading'
import { ToastAlert } from '../../components/Alert'
import { ADMIN_SCOPE, MODERATOR_SCOPE, useUser } from '../../hooks/user'
import { useMediaQuery } from 'usehooks-ts'

const defaultModalTitle = 'Nova Categoria'

export function Categories() {
  const toast = useToast()
  const { checkScopePermissions } = useUser()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [categories, setCategories] = useState<Category[]>([])

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )

  const [isModalOpen, setIsModalOpen] = useState(false)

  const [modalTitle, setModalTitle] = useState(defaultModalTitle)

  const [isLoadingCategories, setIsLoadingCategories] = useState(false)

  useEffect(() => {
    if (!isModalOpen) {
      getCategories().then()
    }
  }, [isModalOpen])

  const getCategories = async () => {
    setIsLoadingCategories(true)

    getAllCategories()
      .then((response) => {
        setCategories(response.data)
      })
      .finally(() => {
        setIsLoadingCategories(false)
      })
  }

  const handleModalOpen = useCallback((modalState: boolean) => {
    setIsModalOpen(modalState)
    setSelectedCategory(null)
    setModalTitle(defaultModalTitle)
  }, [])

  const handleDeleteCategory = (e: BaseSyntheticEvent, id: number) => {
    e.preventDefault()

    setIsLoadingCategories(true)

    deleteCategory(id)
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="delete-category-success"
                title="Categoria Apagada com Sucesso"
                description=""
                status="success"
              />
            )
          },
        })

        getCategories().then()
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
                id="create-category-error"
                title="Erro ao apagar categoria"
                description={`Erro: ${msg}`}
                status=""
              />
            )
          },
        })
      })
      .finally(() => {
        setIsLoadingCategories(false)
      })
  }

  const handleEditCategory = (e: BaseSyntheticEvent, category: Category) => {
    e.preventDefault()
    setSelectedCategory(category)
    setModalTitle('Editar Categoria')
    setIsModalOpen(true)
  }

  return (
    <>
      <CategoriesContainer>
        <div className="logo-categories-container">
          <Logo />
        </div>

        <section className="categories-list">
          <div id="create-category">
            <h1 className="categories-page-title">Lista de Categorias</h1>

            {(checkScopePermissions(ADMIN_SCOPE) ||
              checkScopePermissions(MODERATOR_SCOPE)) && (
              <Button
                size={isMobile ? 'sm' : 'lg'}
                rightIcon={<AddIcon />}
                onPress={() => handleModalOpen(true)}
              >
                Criar categoria
              </Button>
            )}
          </div>

          <CategoriesListContainer>
            {isLoadingCategories ? (
              <Loading accessibilityLabel="Carregando os tópicos..." />
            ) : (
              <>
                {categories.map((category) => (
                  <div key={category.id} id="category-card">
                    {(checkScopePermissions(ADMIN_SCOPE) ||
                      checkScopePermissions(MODERATOR_SCOPE)) && (
                      <CategoryButtonsContainer>
                        <EditButtonContainer
                          onClick={(e) => handleEditCategory(e, category)}
                        >
                          <FaEdit color={theme.colors.primary['50']} />
                        </EditButtonContainer>

                        <DeleteButtonContainer
                          onClick={(e) => handleDeleteCategory(e, category.id)}
                        >
                          <DeleteIcon color={theme.colors.primary['50']} />
                        </DeleteButtonContainer>
                      </CategoryButtonsContainer>
                    )}

                    <p id="category-name">{category.name}</p>
                    <ColorIndicator colorIndicator={category.color} />
                  </div>
                ))}
              </>
            )}
          </CategoriesListContainer>
        </section>
      </CategoriesContainer>

      {(checkScopePermissions(ADMIN_SCOPE) ||
        checkScopePermissions(MODERATOR_SCOPE)) && (
        <CreateCategoryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={handleModalOpen}
          selectedCategory={selectedCategory}
          isEditing={selectedCategory !== null}
          title={modalTitle}
        />
      )}
    </>
  )
}
