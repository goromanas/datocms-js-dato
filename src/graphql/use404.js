import { useStaticQuery, graphql } from 'gatsby'
export const use404 = () => {
  const data = useStaticQuery(
    graphql`
      query notFoundQuery {
        data: datoCmsPage404 {
          content
          link
          title
          image {
            url
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `,
  )
  return data
}
