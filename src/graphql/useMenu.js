import { useStaticQuery, graphql } from 'gatsby'
export const useMenu = () => {
  const menu = useStaticQuery(
    graphql`
      query menuQuery {
        menu: allDatoCmsMenu(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              title
              link
              id
              position
            }
          }
        }
      }
    `,
  )
  return menu
}
