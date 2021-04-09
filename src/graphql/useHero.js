import { useStaticQuery, graphql } from 'gatsby'
export const useHero = () => {
  const hero = useStaticQuery(
    graphql`
      query heroQuery {
        hero: datoCmsHero {
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
      }
    `,
  )
  return hero
}
