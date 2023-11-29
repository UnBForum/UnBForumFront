import { Button, useToast } from 'native-base'

import { LoginContainer } from './styles'
import { Logo } from '../../assets/Logo'
import { UnBForumInput } from '../../components/UnBForumInput'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent, useCallback, useState } from 'react'
import { validateLoginUser } from '../../utils/validateLoginUser'
import { ToastAlert } from '../../components/Alert'
import { loginUser } from '../../service/auth'
import { formatLoginUser } from '../../utils/formatLoginUser'
import { useUser } from '../../hooks/user'

export function Login() {
  const navigate = useNavigate()
  const toast = useToast()
  const { changeToken } = useUser()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleChangeLogin = useCallback(
    (field: string, value: string) => {
      setLoginData({
        ...loginData,
        [field]: value,
      })
    },
    [loginData],
  )

  function handleLogin(event: BaseSyntheticEvent) {
    event.preventDefault()

    const { isValid, fieldErrors } = validateLoginUser(loginData)

    if (!isValid) {
      toast.show({
        placement: 'top-right',
        render: () => {
          return (
            <ToastAlert
              id="login-user-error"
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

    loginUser(formatLoginUser(loginData))
      .then((response) => {
        toast.show({
          placement: 'top-right',
          render: () => {
            return (
              <ToastAlert
                id="create-user-success"
                title="Bem-vindo ao UnBFórum"
                description={`Usuário logado com sucesso!`}
                status="success"
              />
            )
          },
        })

        changeToken(response.data.access_token)

        navigate('/')
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
  }

  return (
    <LoginContainer>
      <Logo />

      <div className="buttons-container">
        <UnBForumInput
          name="email"
          onChange={handleChangeLogin}
          accessibilityLabel="Digite o seu email Institucional"
          inputType="text"
          label="Email Institucional"
          placeholder="Digite o email 240014099@unb.br..."
        />

        <UnBForumInput
          name="password"
          onChange={handleChangeLogin}
          accessibilityLabel="Senha"
          inputType="password"
          label="Digite a sua senha"
          placeholder="Digite a sua senha"
        />

        <Button
          onPress={(e) => handleLogin(e)}
          variant="solid"
          size="lg"
          isLoading={isLoading}
          isLoadingText="Entrando..."
        >
          Entrar
        </Button>

        <Button onPress={(_) => navigate(-1)} variant="outline" size="lg">
          Voltar
        </Button>
      </div>
    </LoginContainer>
  )
}
