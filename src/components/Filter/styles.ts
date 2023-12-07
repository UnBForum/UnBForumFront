import { theme } from 'native-base'
import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  gap: 1rem;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SearchContainer = styled.div`
  width: 60%;
  background-color: ${theme.colors.white};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const OrderByContainer = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
