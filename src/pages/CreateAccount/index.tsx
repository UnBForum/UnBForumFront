import { Logo } from '../../assets/Logo'
import { CreateAccountContainer } from './styles'
import { UnBForumInput } from '../../components/UnBForumInput'
import { Button, useToast } from 'native-base'

import { InputsObjectProps, inputsObject } from './inputsObject'
import { UnBForumSelect } from '../../components/UnBForumSelect'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../service/users'
import { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react'
import { validateCreateUser } from '../../utils/validateCreateUser'
import { ToastAlert } from '../../components/Alert'
import { formatCreateUser } from '../../utils/formatCreateUser'

export function CreateAccount() {
  const navigate = useNavigate()
  const toast = useToast()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profile: '',
    course: '',
    password: '',
    passwordConfirm: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // console.log(userData)
  }, [userData])

  const handleChangeForm = useCallback(
    (field: string, value: string) => {
      setUserData({
        ...userData,
        [field]: value,
      })
    },
    [userData],
  )

  const handleCreateAccount = async (e: BaseSyntheticEvent) => {
    e.preventDefault()

    const { isValid, fieldErrors } = validateCreateUser(userData)
    console.log(userData)

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

    setIsLoading(true)

    createUser(formatCreateUser(userData))
      .then((response) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="create-user-success"
                title="Bem-vindo ao UnBFórum"
                description={`Usuário criado com sucesso!\nClique em 'Entrar' e faça o seu login na aplicação!`}
                status="success"
              />
            )
          },
        })

        navigate('/login/logon')
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
        setIsLoading(false)
      })

    // console.log(response.status, response.data)
  }

  function renderInput(inputObject: InputsObjectProps) {
    switch (inputObject.input) {
      case 'select':
        return (
          <UnBForumSelect
            key={inputObject.label}
            label={inputObject.label}
            placeholder={inputObject.placeholder}
            options={inputObject.options}
            name={inputObject.name}
            onChange={handleChangeForm}
            accessibilityLabel={inputObject.accessibilityLabel}
          />
        )

      default:
        return (
          <UnBForumInput
            key={inputObject.label}
            label={inputObject.label}
            placeholder={inputObject.placeholder}
            inputType={inputObject.type}
            name={inputObject.name}
            onChange={handleChangeForm}
            accessibilityLabel={inputObject.accessibilityLabel}
          />
        )
    }
  }

  return (
    <CreateAccountContainer>
      <Logo />

      <div className="inputs-container">
        {inputsObject.map((inputObject) => {
          return renderInput(inputObject)
        })}

        <Button
          onPress={(e) => handleCreateAccount(e)}
          variant="solid"
          size="lg"
          isLoading={isLoading}
          isLoadingText="Criando usuário..."
        >
          Criar Conta
        </Button>

        <Button onPress={(_) => navigate(-1)} variant="outline" size="lg">
          Voltar
        </Button>
      </div>
    </CreateAccountContainer>
  )
}
