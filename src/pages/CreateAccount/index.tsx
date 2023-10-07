import { Logo } from '../../assets/logo'
import { CreateAccountContainer } from './styles'
import { UnBForumInput } from '../../components/UnBForumInput'
import { Button } from 'native-base'

import { InputsObjectProps, inputsObject } from './inputsObject'
import { UnBForumSelect } from '../../components/UnBForumSelect'

export function CreateAccount() {
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

        <Button variant="solid" size="lg">
          Criar Conta
        </Button>
      </div>
    </CreateAccountContainer>
  )
}
