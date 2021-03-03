import { useStaticQuery, graphql } from 'gatsby'
export const useHero = () => {
  const hero = useStaticQuery(
    graphql`
      query heroQuery {
        datoCmsHero {
          title
          subtitle
          heroImage {
            url
            fluid(maxWidth: 1100) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `,
  )
  return hero
}
