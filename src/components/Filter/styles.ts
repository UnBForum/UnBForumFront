import { theme } from 'native-base'
import styled from 'styled-components'

export const OptionsContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.info['700']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0.8rem;
  border-radius: 5px;

  color: white;
`

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
`

export const OrdenationContainer = styled.div`
  width: 50%;
  display: flex;
`
