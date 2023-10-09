import { Button } from 'native-base'

import { LoginContainer } from './styles'
import { Logo } from '../../assets/logo'
import { UnBForumInput } from '../../components/UnBForumInput'
import { useNavigate } from 'react-router-dom'
import { BaseSyntheticEvent } from 'react'

export function Login() {
  const navigate = useNavigate()

  function handleLogin(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/')
  }

  return (
    <LoginContainer>
      <Logo />

      <div className="buttons-container">
        <UnBForumInput
          accessibilityLabel="Digite o seu email Institucional"
          inputType="text"
          label="Email Institucional"
          placeholder="Digite o email 240014099@unb.br..."
        />

        <UnBForumInput
          accessibilityLabel="Senha"
          inputType="password"
          label="Digite a sua senha"
          placeholder="Digite a sua senha"
        />

        <Button onPress={(e) => handleLogin(e)} variant="solid" size="lg">
          Entrar
        </Button>
      </div>
    </LoginContainer>
  )
}
