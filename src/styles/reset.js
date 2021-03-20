import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
@import url('https://use.typekit.net/tnz5lnx.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: bilo, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${colors.background};
    overflow-x: hidden;
    color: ${colors.dark};
  }

  a {
    color: ${colors.dark};

    &:hover {
      color: ${colors.primary};
      cursor: pointer;
    }
  }
`
