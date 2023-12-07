import chroma from 'chroma-js'
import { Button, SearchIcon, theme } from 'native-base'

import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select'
import { useEffect, useState } from 'react'

import { FiltersContainer, SearchContainer, OrderByContainer } from './styles'
import { unbForumSortOptions } from '../../constants'
import { Category } from '../../utils/interfaces'
import { getAllCategories } from '../../service/categories'
import { SearchInput } from '../../pages/Home/styles.ts'

interface OptionsType {
  value: string
  label: string
  color: string
}

interface FilterProps {
  onChangeCategoriesFilter: (newValue: MultiValue<OptionsType>) => void
  onChangeOrderBy: (itemValue: SingleValue<OptionsType>) => void
  onChangeSearchInput: (field: string, value: string) => void
  handleSearch: () => void
}

const colourStyles: StylesConfig<OptionsType> = {
  control: (styles) => ({ ...styles, backgroundColor: theme.colors.white }),
  option: (styles, { data, isMulti, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? isMulti
            ? data.color
            : color.alpha(0.2).css()
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? isMulti
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
  input: (styles) => ({
    ...styles,
    'input:focus': {
      boxShadow: 'none',
    },
  }),
}

export function Filter({
  onChangeCategoriesFilter,
  onChangeOrderBy,
  onChangeSearchInput,
  handleSearch,
}: FilterProps) {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getAllCategories().then((response) => {
      setCategories(response.data)
    })
  }, [])

  return (
    <>
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={categories.map(
          (category): OptionsType => ({
            value: category.id.toString(),
            label: category.name,
            color: category.color,
          }),
        )}
        styles={colourStyles}
        onChange={onChangeCategoriesFilter}
        placeholder="Filtrar por categorias"
      />

      <FiltersContainer>
        <SearchContainer>
          <SearchInput
            name="topic-search"
            size="xl"
            accessibilityLabel="Buscar tópicos"
            placeholder="Buscar tópicos..."
            inputType="text"
            onChange={onChangeSearchInput}
            // @ts-expect-error InputRightElement
            InputRightElement={
              <Button rounded="none" w="1/12" h="full" onPress={handleSearch}>
                <SearchIcon color={theme.colors.white} size="22" />
              </Button>
            }
          />
        </SearchContainer>
        <OrderByContainer>
          <Select
            isMulti={false}
            defaultValue={unbForumSortOptions[0]}
            options={unbForumSortOptions}
            placeholder="Ordenar Tópicos"
            styles={colourStyles}
            onChange={onChangeOrderBy}
          />
        </OrderByContainer>
      </FiltersContainer>
    </>
  )
}
