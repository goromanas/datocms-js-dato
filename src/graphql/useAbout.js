import { useStaticQuery, graphql } from 'gatsby'
export const useAbout = () => {
  const about = useStaticQuery(
    graphql`
      query aboutQuery {
        about: datoCmsAbout {
          title
          description
        }
      }
    `,
  )
  return about
}
