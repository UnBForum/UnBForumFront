import { Button, useBreakpointValue, useToast } from 'native-base'
import { Logo } from '../../assets/Logo'
import { UnBForumInput } from '../../components/UnBForumInput'
import { ProfileContainer } from './styles'
import { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react'
import {
  deleteUser,
  getCurretUser,
  updateUser,
  updateUserPassword,
} from '../../service/users'
import { BackendUser } from '../../utils/interfaces'
import { validateUpdateUser } from '../../utils/validateUpdateUser'
import { ToastAlert } from '../../components/Alert'
import { useUser } from '../../hooks/user'
import { validateUpdatePassword } from '../../utils/validateUpdatePassword'
import { Dialog } from '../../components/Dialog'
import { useNavigate } from 'react-router-dom'

export function Profile() {
  const navigate = useNavigate()
  const toast = useToast()
  const { name, email, setName, logoutUser } = useUser()
  const buttonSize = useBreakpointValue({
    lg: 'lg',
    base: 'md',
  })

  const [isExitDialogOpen, setIsExitDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingPassword, setIsEditingPassword] = useState(false)

  const [userData, setUserData] = useState<BackendUser>({
    email,
    id: 0,
    name,
    role: '',
    tags: [],
  })

  const [isLoadingUpdateUser, setIsLoadingUpdateUser] = useState(false)
  const [isLoadingDeleteUser, setIsLoadingDeleteUser] = useState(false)
  const [isLoadingUpdatePassword, setIsLoadingUpdatePassword] = useState(false)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  useEffect(() => {
    getCurretUser().then((response) => {
      setUserData(response.data)
      setName(response.data.name)
    })
  }, [setName])

  const handleChangeForm = useCallback(
    (field: string, value: string) => {
      setUserData({
        ...userData,
        [field]: value,
      })
    },
    [userData],
  )

  const handleDeleteUser = useCallback(() => {
    setIsLoadingDeleteUser(true)

    deleteUser()
      .then(() => {})
      .finally(() => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="delete-user-success"
                title="Usuário deletado!"
                description="A qualquer momento você poderá criar uma nova conta"
                status="success"
              />
            )
          },
        })

        logoutUser()
        setIsLoadingDeleteUser(false)
        setIsDeleteDialogOpen(false)
        navigate('/')
      })
  }, [navigate, logoutUser, toast])

  const handleUpdateUser = (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const { fieldErrors, isValid } = validateUpdateUser(userData.name)

    if (!isValid) {
      toast.show({
        placement: 'top-right',
        render: () => {
          return (
            <ToastAlert
              id="create-user-error"
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

    setIsLoadingUpdateUser(true)

    updateUser({ name: userData.name })
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="update-user-success"
                title="Usuário atualizado!"
                description=""
                status="success"
              />
            )
          },
        })

        setName(userData.name)
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
                id="create-user-error"
                title="Campos Inválidos"
                description={`Erro: ${msg}`}
                status=""
              />
            )
          },
        })
      })
      .finally(() => {
        setIsLoadingUpdateUser(false)
        setIsEditingName(false)
      })
  }

  const handleUpdatePassword = (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const { fieldErrors, isValid, specialError } = validateUpdatePassword(
      password,
      newPassword,
    )

    if (!isValid) {
      toast.show({
        placement: 'top-right',
        render: () => {
          return (
            <ToastAlert
              id="create-user-error"
              title="Campos Inválidos"
              description={
                fieldErrors.length > 0
                  ? `Os sequintes campos estão incorretos: ${fieldErrors.reduce(
                      (prev, curr, idx) => {
                        if (idx === 0) return `'${curr}'`
                        if (idx === fieldErrors.length - 1)
                          return `${prev} e '${curr}'`
                        return `${prev}, '${curr}'`
                      },
                      '',
                    )}`
                  : specialError
              }
              status=""
            />
          )
        },
      })
      return
    }

    setIsLoadingUpdatePassword(true)

    updateUserPassword({
      current_password: password,
      new_password: newPassword,
    })
      .then((_) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="create-user-success"
                title="Senha atualizada com sucesso!"
                description=""
                status="success"
              />
            )
          },
        })
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
                id="create-user-error"
                title="Campos Inválidos"
                description={`Erro: ${msg}`}
                status=""
              />
            )
          },
        })
      })
      .finally(() => {
        setIsLoadingUpdatePassword(false)
        setIsEditingPassword(false)
        setPassword('')
        setNewPassword('')
      })
  }

  const renderButtons = () => {
    if (isEditingName) {
      return (
        <>
          <Button
            variant="solid"
            size={buttonSize}
            onPress={() => {
              setIsEditingName(false)
              getCurretUser().then((response) => {
                setUserData(response.data)
              })
            }}
          >
            Cancelar
          </Button>

          <Button
            variant="outline"
            size={buttonSize}
            isLoading={isLoadingUpdateUser}
            isLoadingText="Atualizando Usuário..."
            onPress={(e) => handleUpdateUser(e)}
          >
            Atualizar Usuário
          </Button>
        </>
      )
    } else if (isEditingPassword) {
      return (
        <>
          <Button
            variant="solid"
            size={buttonSize}
            onPress={() => {
              setIsEditingPassword(false)
              setPassword('')
              setNewPassword('')
            }}
          >
            Cancelar
          </Button>

          <Button
            variant="outline"
            size={buttonSize}
            isLoading={isLoadingUpdatePassword}
            isLoadingText="Atualizando Senha..."
            onPress={(e) => handleUpdatePassword(e)}
          >
            Alterar Senha
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Button
            variant="solid"
            size={buttonSize}
            onPress={() => setIsEditingName(true)}
          >
            Editar Perfil
          </Button>

          <Button
            variant="outline"
            size={buttonSize}
            onPress={() => setIsEditingPassword(true)}
          >
            Alterar Senha
          </Button>
        </>
      )
    }
  }

  return (
    <ProfileContainer>
      <div className="logo-profile-container">
        <Logo />
      </div>

      <section className="inputs-profile-container">
        <h1 className="profile-page-title">Perfil de Usuário</h1>

        <UnBForumInput
          name="name"
          onChange={handleChangeForm}
          isEditing={isEditingName}
          value={userData.name}
          label="Nome Completo"
          placeholder="Digite seu nome completo..."
          inputType="text"
          accessibilityLabel="Digite o seu nome completo..."
        />

        <UnBForumInput
          name="email"
          onChange={() => {}}
          isEditing={false}
          value={userData.email}
          label="Email Institucional"
          placeholder="Digite seu nome email..."
          inputType="text"
          accessibilityLabel="Digite o seu email..."
        />

        <UnBForumInput
          name="password"
          onChange={(_, value) => setPassword(value)}
          isEditing={isEditingPassword}
          value={isEditingPassword ? password : 'valordeteste'}
          label={isEditingPassword ? 'Senha Atual' : 'Senha'}
          placeholder="Digite sua senha atual..."
          inputType="password"
          accessibilityLabel="Digite a sua senha..."
        />

        {isEditingPassword && (
          <UnBForumInput
            name="passwordConfirm"
            onChange={(_, value) => setNewPassword(value)}
            label="Nova Senha"
            placeholder="Digite a sua nova senha..."
            inputType="password"
            accessibilityLabel="Digite a sua nova senha..."
          />
        )}

        {renderButtons()}

        {!isEditingName && !isEditingPassword && (
          <div className="sub-buttons-container">
            <Button
              variant="subtle"
              size="md"
              onPress={() => setIsExitDialogOpen(true)}
            >
              Sair
            </Button>
            <Button
              variant="subtle"
              size="md"
              onPress={() => setIsDeleteDialogOpen(true)}
            >
              Remover a Conta
            </Button>
          </div>
        )}
      </section>

      <Dialog
        isOpen={isExitDialogOpen}
        handleAccept={() => {
          setIsExitDialogOpen(false)
          logoutUser()
          navigate('/')
        }}
        handleClose={() => setIsExitDialogOpen(false)}
        question="Tem certeza que deseja sair da aplicação?"
        acceptText="Sair do UnBFórum"
      />

      <Dialog
        isOpen={isDeleteDialogOpen}
        handleAccept={() => {
          handleDeleteUser()
        }}
        handleClose={() => setIsDeleteDialogOpen(false)}
        question="Tem certeza que deseja remover sua conta?"
        acceptText="Remover"
        isLoadingAcceptButton={isLoadingDeleteUser}
        loadingAcceptButtonText="Deletando..."
      />
    </ProfileContainer>
  )
}
