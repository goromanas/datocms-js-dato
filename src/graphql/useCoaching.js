import { useStaticQuery, graphql } from 'gatsby'
export const useCoaching = () => {
  const coaching = useStaticQuery(
    graphql`
      query coachingQuery {
        coaching: datoCmsCoaching {
          title
          description
          expandableDescription
        }
      }
    `,
  )
  return coaching
}
