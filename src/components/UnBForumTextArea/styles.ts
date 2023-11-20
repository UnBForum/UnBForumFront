import styled from 'styled-components'
import { theme } from 'native-base'

export const TextAreaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  & > div,
  textarea {
    height: 10rem;
  }

  & > textarea {
    font-size: 0.9rem;
    line-height: 1rem;
    color: ${theme.colors.black};
  }
`

export const InputLabel = styled.label<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5rem;
  color: ${theme.colors.text[500]};
`
