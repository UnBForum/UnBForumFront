import { createGlobalStyle } from 'styled-components'
import { theme } from 'native-base'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0  10px ${(props) => props.theme['green-500']};
  }

  body {
    background: ${theme.colors.dark['900']};
    color: ${theme.colors.black};
    overflow-y: scroll;
  }

  body, input, textarea, button, div[role='button'] {
    font-family: 'Poppins', 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    transition: background-color .3s;
  }

  button {
    cursor: pointer;
    /* font-size: 1.6rem; */
    background: none;
    border: 0;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1.5;
    font-weight: 600;
    /* color: #000; */
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
