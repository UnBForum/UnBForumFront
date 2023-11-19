import { IInputProps, Input } from 'native-base'
import { InputContainer, InputLabel } from './styles'

interface UnBForumInputProps extends IInputProps {
  inputType: 'text' | 'password'
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  placeholder: string
  accessibilityLabel: string
  fontSize?: string
}

export function UnBForumInput({
  label = '',
  inputType = 'text',
  placeholder,
  accessibilityLabel,
  size = 'md',
  fontSize = '0.9rem',
  ...rest
}: UnBForumInputProps) {
  return (
    <InputContainer>
      {label && <InputLabel fontSize={fontSize}>{label}</InputLabel>}
      <Input
        type={inputType}
        variant="outline"
        size={size}
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel}
        {...rest}
      />
    </InputContainer>
  )
}
