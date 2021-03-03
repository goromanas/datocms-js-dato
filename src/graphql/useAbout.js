import { useStaticQuery, graphql } from 'gatsby'
export const useAbout = () => {
  const about = useStaticQuery(
    graphql`
      query aboutQuery {
        datoCmsAbout {
          title
          description
        }
      }
    `,
  )
  return about
}
