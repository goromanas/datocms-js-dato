import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://use.typekit.net/tnz5lnx.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: bilo, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    color: ${({ theme }) => theme.colors.dark};;
  }

  a {
    color: ${({ theme }) => theme.colors.dark};;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};;
      cursor: pointer;
    }
  }
`
