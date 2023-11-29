import { Select } from 'native-base'
import { SelectContainer } from './styles'

export interface SelectOptions {
  label: string
  value: string
}

interface UnBForumSelectProps {
  label: string
  placeholder: string
  accessibilityLabel: string
  name: string
  options?: SelectOptions[]
  isRequired?: boolean
  isEditing?: boolean
  fontSize?: string
  onChange: (field: string, value: string) => void
}

export function UnBForumSelect({
  label,
  placeholder,
  options = [],
  onChange,
  isRequired = true,
  fontSize = '0.9rem',
  isEditing = true,
  name,
}: UnBForumSelectProps) {
  return (
    <SelectContainer fontSize={fontSize}>
      <label className="create-account-label">
        {label}
        {isRequired && <p id="required">{'*'}</p>}
      </label>

      <Select
        variant="outline"
        height={9}
        size="md"
        isDisabled={!isEditing}
        onValueChange={(itemValue) => onChange(name, itemValue)}
        placeholder={placeholder}
        accessibilityLabel="Selecione a opção"
      >
        {options.map((option) => {
          return (
            <Select.Item
              key={option.label}
              label={option.label}
              value={option.value}
            />
          )
        })}
      </Select>
    </SelectContainer>
  )
}
