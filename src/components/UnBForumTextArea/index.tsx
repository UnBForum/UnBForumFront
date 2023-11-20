import { ITextAreaProps, TextArea } from 'native-base'
import { InputLabel, TextAreaContainer } from './styles'

interface UnBForumTextAreaProps extends ITextAreaProps {
  inputType: 'text' | 'password'
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  placeholder: string
  accessibilityLabel: string
  fontSize: string
}

export function UnBForumTextArea({
  label = '',
  inputType = 'text',
  placeholder,
  accessibilityLabel,
  size = 'md',
  fontSize = '0.9rem',
  ...rest
}: UnBForumTextAreaProps) {
  return (
    <TextAreaContainer>
      {label && <InputLabel fontSize={fontSize}>{label}</InputLabel>}
      <TextArea
        // height="10rem"
        type={inputType}
        variant="outline"
        size={size}
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel}
        autoCompleteType={null}
        totalLines={5}
        maxLength={500}
        {...rest}
      />
    </TextAreaContainer>
  )
}
