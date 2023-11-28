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

    const response = await createUser(formatCreateUser(userData))

    console.log('AHHHHH', response.status)

    if (response.status !== 200) {
      toast.show({
        placement: 'top-right',
        render: () => {
          return (
            <ToastAlert
              id="create-user-error"
              title="Campos Inválidos"
              description={`Erro: ${response.data.detail}`}
              status=""
            />
          )
        },
      })
      return
    }

    // console.log(response.status, response.data)

    navigate('/login/logon')
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
        >
          Criar Conta
        </Button>
      </div>
    </CreateAccountContainer>
  )
}
