import { Input } from 'native-base'
import { InputContainer } from './styles'

interface UnBForumInputProps {
  inputType: 'text' | 'password' | undefined
  label: string
  placeholder: string
  accessibilityLabel: string
}

export function UnBForumInput({
  label,
  inputType = 'text',
  placeholder,
  accessibilityLabel,
}: UnBForumInputProps) {
  return (
    <InputContainer>
      <label className="create-account-label">{label}</label>
      <Input
        type={inputType}
        variant="outline"
        size="md"
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel}
      />
    </InputContainer>
  )
}
