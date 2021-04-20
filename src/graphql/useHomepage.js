import { useStaticQuery, graphql } from 'gatsby'
export const useHomepage = () => {
  const home = useStaticQuery(
    graphql`
      query homepageQuery {
        homepage: datoCmsHome {
          hero {
            title
            subtitle
            description
            overlay
            heroImage {
              url
              fluid(maxWidth: 1100) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
          coaching {
            title
            description
            expandableDescription
          }
          about {
            title
            description
            image {
              fixed(width: 300) {
                ...GatsbyDatoCmsFixed
              }
            }
          }
          servicesTitle
          services {
            title
            price
            description
            additionalInfo
            tooltip
            originalId
          }
          servicesBackground {
            url
            fluid(maxWidth: 1100) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `,
  )
  return home
}
