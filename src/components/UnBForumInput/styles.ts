import styled from 'styled-components'
import { theme } from 'native-base'

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  .create-account-label {
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: ${theme.colors.text[500]};
  }
`
