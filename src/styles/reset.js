import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
@import url('https://use.typekit.net/tnz5lnx.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: bilo, sans-serif;
  }

  body {
    background: #F8F8F8;
    overflow-x: hidden;
    color: #06101A;
  }

  a {
    color: ${colors.dark};

    &:hover {
      color: ${colors.primary};
      cursor: pointer;
    }
  }
`
