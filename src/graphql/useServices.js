import { useStaticQuery, graphql } from 'gatsby'
export const useServices = () => {
  const services = useStaticQuery(
    graphql`
      query serviceQuery {
        allDatoCmsService {
          edges {
            node {
              id
              title
              price
              description
            }
          }
        }
      }
    `,
  )
  return services
}
