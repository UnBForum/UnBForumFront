import { theme } from 'native-base'
import styled from 'styled-components'

export const OptionsContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.info['700']};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.7rem 0.7rem;
  border-radius: 5px;
  gap: 1rem;

  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    width: 95%;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    width: 95%;
  }

  @media (max-width: 768px) {
    /* width: 100%; */
    gap: 0.5rem;
  }
`

export const OrderByContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  & > div {
    width: 95%;
  }

  @media (max-width: 768px) {
    /* width: 100%; */
    gap: 0.5rem;
  }
`
