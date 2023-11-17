import { IInputProps, Input } from 'native-base'
import { InputContainer } from './styles'

interface UnBForumInputProps extends IInputProps {
  inputType: 'text' | 'password'
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  placeholder: string
  accessibilityLabel: string
}

export function UnBForumInput({
  label = '',
  inputType = 'text',
  placeholder,
  accessibilityLabel,
  size = 'md',
  ...rest
}: UnBForumInputProps) {
  return (
    <InputContainer>
      {label && <label className="create-account-label">{label}</label>}
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
