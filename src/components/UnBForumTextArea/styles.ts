import styled from 'styled-components'
import { theme } from 'native-base'

export const TextAreaContainer = styled.div<{ isComment: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 0.3rem; */

  & > div,
  textarea {
    height: ${({ isComment }) => (isComment ? '5rem' : '13rem')};
  }

  & > textarea {
    font-size: 0.9rem;
    line-height: 1rem;
    color: ${theme.colors.black};
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
