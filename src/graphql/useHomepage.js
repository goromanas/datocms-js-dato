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
              fixed(width: 200) {
                ...GatsbyDatoCmsFixed
              }
              fluid(maxWidth: 300) {
                ...GatsbyDatoCmsFluid
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
          seo: seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `,
  )
  return home
}
