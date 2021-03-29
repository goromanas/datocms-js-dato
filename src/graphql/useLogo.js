import { useStaticQuery, graphql } from 'gatsby'
export const useLogo = () => {
  const logo = useStaticQuery(
    graphql`
      query logoQuery {
        logo: datoCmsLogo {
          text
          image {
            url
            fixed(width: 80) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    `,
  )
  return logo
}
