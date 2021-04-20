import { useStaticQuery, graphql } from 'gatsby'
export const useLogo = () => {
  const logo = useStaticQuery(
    graphql`
      query logoQuery {
        logo: datoCmsLogo {
          text
          image {
            url
            fixed(width: 50) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    `,
  )
  return logo
}
