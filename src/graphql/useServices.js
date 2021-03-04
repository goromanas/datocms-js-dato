import { useStaticQuery, graphql } from 'gatsby'
export const useServices = () => {
  const services = useStaticQuery(
    graphql`
      query serviceQuery {
        services: allDatoCmsService(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              id
              title
              price
              description
            }
          }
        }
        section: allDatoCmsSection {
          edges {
            node {
              title
              tooltip
              background {
                url
                fluid(maxWidth: 1100) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `,
  )
  return services
}
