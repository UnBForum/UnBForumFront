import { createGlobalStyle } from 'styled-components'
import { theme } from 'native-base'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0  10px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${theme.colors.dark['900']};
    color: ${theme.colors.black};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
