import styled from 'styled-components'
import { theme } from 'native-base'

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */
`

export const InputLabel = styled.label<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1.5rem;
  color: ${theme.colors.text[500]};
`
