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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 0.5rem;

  & > svg {
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.tertiary['300']};
  }

  & > div {
    width: 85%;
  }

  option {
    background-color: ${theme.colors.gray[200]};
    color: ${theme.colors.black};
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-size: 0.9rem;
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;

    option {
      font-size: 0.8rem;
    }
  }
`

export const OrdenationContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 0.5rem;

  & > div {
    width: 85%;
  }

  & > svg {
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.tertiary['300']};
  }

  option {
    background-color: ${theme.colors.gray[200]};
    color: ${theme.colors.black};
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-size: 0.9rem;
    gap: 0.3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;

    option {
      font-size: 0.8rem;
    }
  }
`
