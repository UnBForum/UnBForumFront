import { Button } from 'native-base'

import { LoginContainer } from './styles'
import { Logo } from '../../assets/logo'
import { BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function Logon() {
  const navigate = useNavigate()

  function handleCreateAccount(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login/create-account')
  }

  function handleLogin(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login')
  }

  return (
    <LoginContainer>
      <Logo />

      <div className="buttons-container">
        <Button onPress={(e) => handleLogin(e)} variant="outline" size="lg">
          Entrar
        </Button>
        <Button
          onPress={(e) => handleCreateAccount(e)}
          variant="solid"
          size="lg"
        >
          Criar Conta
        </Button>
      </div>
    </LoginContainer>
  )
}
