import { Button } from 'native-base'

import { CreateAccountContainer } from './styles'
import { Logo } from '../../assets/logo'

export function CreateAccount() {
  return (
    <CreateAccountContainer>
      <Logo />

      <div className="buttons-container">
        <Button variant="outline" size="lg">
          Entrar
        </Button>
        <Button variant="solid" size="lg">
          Criar Conta
        </Button>
      </div>
    </CreateAccountContainer>
  )
}
