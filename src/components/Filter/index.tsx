import { Select, theme } from 'native-base'

import { FaFilter } from 'react-icons/fa'
import { PiArrowsDownUpBold } from 'react-icons/pi'

import {
  FilterContainer,
  OptionsContainer,
  OrdenationContainer,
} from './styles'
import { unbForumCourses } from '../../pages/CreateAccount/inputsObject'
import { unbForumFilters } from '../../constants'
import { useMediaQuery } from 'usehooks-ts'

export function Filter() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <OptionsContainer>
      <FilterContainer>
        <FaFilter size={20} color={theme.colors.tertiary['300']} />

        <Select
          backgroundColor={theme.colors.white}
          color={theme.colors.black}
          variant="outline"
          height={9}
          size={isMobile ? 'sm' : 'lg'}
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
        <PiArrowsDownUpBold size={22} color={theme.colors.tertiary['300']} />

        <Select
          backgroundColor={theme.colors.white}
          color={theme.colors.black}
          variant="outline"
          height={9}
          size={isMobile ? 'sm' : 'lg'}
          placeholder="Selecione a ordenação..."
          accessibilityLabel="Selecione a opção"
        >
          {unbForumFilters.map((option) => {
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
