import styled from 'styled-components'
import { theme } from 'native-base'

export const SelectContainer = styled.div<{ fontSize: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  .create-account-label {
    display: flex;
    flex-direction: row;
    gap: 0.3rem;

    font-size: ${({ fontSize }) => fontSize};
    line-height: 1.5rem;
    color: ${theme.colors.text[500]};

    #required {
      color: ${theme.colors.danger['600']};
    }
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
