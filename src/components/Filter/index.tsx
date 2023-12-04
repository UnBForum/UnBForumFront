import { Select, theme } from 'native-base'

import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { PiArrowsDownUpBold } from 'react-icons/pi'

import {
  FilterContainer,
  OptionsContainer,
  OrdenationContainer,
} from './styles'
import { unbForumFilters } from '../../constants'
import { Category } from '../../utils/interfaces'
import { getAllCategories } from '../../service/categories'

export function Filter() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getAllCategories().then((response) => {
      setCategories(response.data)
    })
  }, [])

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
          {categories.map((category) => {
            return (
              <Select.Item
                key={category.id}
                label={category.name}
                value={category.id.toString()}
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
