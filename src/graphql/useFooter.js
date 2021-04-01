import { useStaticQuery, graphql } from 'gatsby'
export const useFooter = () => {
  const footer = useStaticQuery(
    graphql`
      query footerQuery {
        footer: datoCmsFooter {
          title
        }
      }
    `,
  )
  return footer
}
