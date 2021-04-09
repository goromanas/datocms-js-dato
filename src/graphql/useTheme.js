import { useStaticQuery, graphql } from 'gatsby'
export const useTheme = () => {
  const theme = useStaticQuery(
    graphql`
      query themeQuery {
        theme: datoCmsTheme {
          primary {
            hex
          }
          dark {
            hex
          }
          background {
            hex
          }
          contentFontSizePx
        }
      }
    `,
  )
  return theme
}
