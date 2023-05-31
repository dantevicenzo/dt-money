import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: color, background-color 0.15s;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.green};
  }

  body {
    background-color: ${(props) => props.theme.grey2};
    color: ${(props) => props.theme.grey6};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    font-weight: 400;
    font-size: 1rem;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    transition: background-color, color, 0.15s;
  }
`
