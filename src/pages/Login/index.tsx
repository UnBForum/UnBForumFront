import { Button } from 'native-base'

import { LoginContainer } from './styles'
import { Logo } from '../../assets/Logo'
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
          name="email"
          onChange={() => {}}
          accessibilityLabel="Digite o seu email Institucional"
          inputType="text"
          label="Email Institucional"
          placeholder="Digite o email 240014099@unb.br..."
        />

        <UnBForumInput
          name="password"
          onChange={() => {}}
          accessibilityLabel="Senha"
          inputType="password"
          label="Digite a sua senha"
          placeholder="Digite a sua senha"
        />

        <Button onPress={(e) => handleLogin(e)} variant="solid" size="lg">
          Entrar
        </Button>

        <Button onPress={(_) => navigate(-1)} variant="outline" size="lg">
          Voltar
        </Button>
      </div>
    </LoginContainer>
  )
}
