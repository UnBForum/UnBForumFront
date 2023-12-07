import { TextArea } from 'native-base'
import { InputLabel, TextAreaContainer } from './styles'

interface UnBForumTextAreaProps {
  inputType: 'text' | 'password'
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  placeholder: string
  isRequired?: boolean
  accessibilityLabel: string
  fontSize: string
  isEditing?: boolean
  onChange: (field: string, value: string) => void
  value?: string | undefined
  name: string
  isComment?: boolean
}

export function UnBForumTextArea({
  label = '',
  inputType = 'text',
  placeholder,
  accessibilityLabel,
  size = 'md',
  fontSize = '0.9rem',
  isRequired = true,
  isEditing = true,
  name,
  isComment = false,
  value = undefined,
  onChange,
  ...rest
}: UnBForumTextAreaProps) {
  return (
    <TextAreaContainer isComment={isComment}>
      {label && (
        <InputLabel fontSize={fontSize}>
          {label}
          {isRequired && <p id="required">{'*'}</p>}
        </InputLabel>
      )}
      <TextArea
        // height="10rem"
        type={inputType}
        variant={isEditing ? 'outline' : 'filled'}
        size={size}
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel}
        editable={isEditing}
        onChangeText={(text) => onChange(name, text)}
        autoCompleteType={null}
        value={value}
        totalLines={5}
        maxLength={700}
        {...rest}
      />
    </TextAreaContainer>
  )
}
