import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: sans-serif;
    color: ${p => p.theme.text};
    background: ${p => p.theme.background};
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    display: block;
  }

  a {
    font-weight: bold;
    color: ${p => p.theme.text};
    text-decoration: none;
  }

`
export default GlobalStyle
