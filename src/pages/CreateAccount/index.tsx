import { Logo } from '../../assets/logo'
import { CreateAccountContainer } from './styles'
import { UnBForumInput } from '../../components/UnBForumInput'
import { Button } from 'native-base'

import { InputsObjectProps, inputsObject } from './inputsObject'
import { UnBForumSelect } from '../../components/UnBForumSelect'
import { BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function CreateAccount() {
  const navigate = useNavigate()

  function handleCreateAccount(event: BaseSyntheticEvent) {
    event.preventDefault()
    navigate('/login')
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
