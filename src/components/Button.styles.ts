import { Button } from 'native-base'
import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

export const ButtonContainer = styled(Button).attrs(() => ({
  size: 'md',
}))`
  width: 100px;
  height: 40px;
  border-radius: 6px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
