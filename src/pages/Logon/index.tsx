import { Button } from 'native-base'

import { LoginContainer } from './styles'
import { Logo } from '../../assets/logo'

export function Logon() {
  return (
    <LoginContainer>
      <Logo />

      <div className="buttons-container">
        <Button variant="outline" size="lg">
          Entrar
        </Button>
        <Button variant="solid" size="lg">
          Criar Conta
        </Button>
      </div>
    </LoginContainer>
  )
}
