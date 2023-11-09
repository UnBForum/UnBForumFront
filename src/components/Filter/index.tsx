import { Select, theme } from 'native-base'

import { FaFilter } from 'react-icons/fa'
import { PiArrowsDownUpBold } from 'react-icons/pi'

import {
  FilterContainer,
  OptionsContainer,
  OrdenationContainer,
} from './styles'
import { unbForumCourses } from '../../pages/CreateAccount/inputsObject'

export function Filter() {
  return (
    <OptionsContainer>
      <FilterContainer>
        <FaFilter />

        <Select
          backgroundColor={theme.colors.white}
          color={theme.colors.black}
          variant="outline"
          height={9}
          size="lg"
          placeholder="Selecione os filtros..."
          accessibilityLabel="Selecione a opção"
        >
          {unbForumCourses.map((option) => {
            return (
              <Select.Item
                key={option.label}
                label={option.label}
                value={option.value}
              />
            )
          })}
        </Select>
      </FilterContainer>

      <OrdenationContainer>
        <PiArrowsDownUpBold />

        <Select
          backgroundColor={theme.colors.white}
          color={theme.colors.black}
          variant="outline"
          height={9}
          size="lg"
          placeholder="Selecione a ordenação..."
          accessibilityLabel="Selecione a opção"
        >
          {[].map((option) => {
            return (
              <Select.Item
                key={option.label}
                label={option.label}
                value={option.value}
              />
            )
          })}
        </Select>
      </OrdenationContainer>
    </OptionsContainer>
  )
}
