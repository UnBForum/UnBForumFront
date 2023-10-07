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
  options?: SelectOptions[]
}

export function UnBForumSelect({
  label,
  placeholder,
  options = [],
}: UnBForumSelectProps) {
  return (
    <SelectContainer>
      <label className="create-account-label">{label}</label>
      <Select
        variant="outline"
        height={9}
        size="md"
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
