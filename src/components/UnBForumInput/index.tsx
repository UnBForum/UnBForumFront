import { Input } from 'native-base'
import { InputContainer, InputLabel } from './styles'

interface UnBForumInputProps {
  inputType: 'text' | 'password'
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  placeholder: string
  name: string
  accessibilityLabel: string
  fontSize?: string
  isRequired?: boolean
  onChange: (field: string, value: string) => void
}

export function UnBForumInput({
  label = '',
  inputType = 'text',
  placeholder,
  accessibilityLabel,
  size = 'md',
  fontSize = '0.9rem',
  name,
  isRequired = true,
  onChange,
  ...rest
}: UnBForumInputProps) {
  return (
    <InputContainer>
      {label && (
        <InputLabel fontSize={fontSize}>
          {label}
          {isRequired && <p id="required">{'*'}</p>}
        </InputLabel>
      )}

      <Input
        type={inputType}
        variant="outline"
        size={size}
        isRequired={isRequired}
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel}
        onChangeText={(text) => onChange(name, text)}
        {...rest}
      />
      {/* <span id="error-feedback">
        <WarningOutlineIcon size="12" />
        Campo obrigatório
      </span> */}
    </InputContainer>
  )
}
