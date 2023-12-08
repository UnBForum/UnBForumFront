import { Input, theme } from 'native-base'
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
  isEditing?: boolean
  onChange: (field: string, value: string) => void
  value?: string | undefined
  backgroundColor?: string | null
  height?: string | null
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
  isEditing = true,
  value = undefined,
  backgroundColor = null,
  height = null,
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
        height={height || null}
        type={inputType}
        variant={isEditing ? 'outline' : 'filled'}
        size={size}
        backgroundColor={backgroundColor || null}
        isRequired={isRequired}
        value={value}
        placeholder={placeholder}
        editable={isEditing}
        accessibilityLabel={accessibilityLabel}
        onChangeText={(text) => onChange(name, text)}
        {...rest}
      />
    </InputContainer>
  )
}
