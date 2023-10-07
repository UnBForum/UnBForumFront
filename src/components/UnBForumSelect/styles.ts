import styled from 'styled-components'
import { theme } from 'native-base'

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  .create-account-label {
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: ${theme.colors.text[500]};
  }

  svg {
    width: 1.5rem;
  }

  option {
    background-color: ${theme.colors.gray[200]};
    color: ${theme.colors.black};
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-size: 0.9rem;
    gap: 0.3rem;
  }
`
