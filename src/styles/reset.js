import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
@import url('https://use.typekit.net/tnz5lnx.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'bilo-light', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
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
