import { useStaticQuery, graphql } from 'gatsby'
export const useAbout = () => {
  const about = useStaticQuery(
    graphql`
      query aboutQuery {
        about: datoCmsAbout {
          title
          description
          image {
            fixed(width: 300) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    `,
  )
  return about
}
