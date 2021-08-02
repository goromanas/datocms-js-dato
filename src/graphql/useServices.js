import { useStaticQuery, graphql } from 'gatsby'
export const useServices = () => {
  const services = useStaticQuery(
    graphql`
      query serviceQuery {
        services: datoCmsService {
          title
          seo: seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          backgroundimage {
            url
            fluid(maxWidth: 1100) {
              ...GatsbyDatoCmsFluid
            }
          }
          longServiceBlock {
            title
            price
            id
            description {
              blocks
              links
              value
            }
            shortdescription
          }
        }
      }
    `,
  )
  return services
}
