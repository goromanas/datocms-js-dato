import { useStaticQuery, graphql } from 'gatsby'
export const useHideInformation = () => {
  const hideInformation = useStaticQuery(
    graphql`
      query hideInformationQuery {
        itemsToHide: datoCmsHideInformation {
          hideArticles
          hideTestimonials
        }
      }
    `,
  )
  return hideInformation
}
