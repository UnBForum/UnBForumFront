import styled from 'styled-components'
import { theme } from 'native-base'

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  #error-feedback {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    /* font-size: ; */

    & > svg {
      width: 0.7rem;
    }
  }
`

export const InputLabel = styled.label<{ fontSize: string }>`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;

  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5rem;
  color: ${theme.colors.text[500]};

  #required {
    color: ${theme.colors.danger['600']};
  }

  @media (max-width: 768px) {
    font-size: ${({ fontSize }) =>
      Number(fontSize.split('rem')[0]) - 0.2 + 'rem'};
  }
`
