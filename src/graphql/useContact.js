import { useStaticQuery, graphql } from 'gatsby'
export const useContact = () => {
  const contact = useStaticQuery(
    graphql`
      query contactQuery {
        contact: datoCmsContact {
          cta
          email
          linkedin
          phone
          title
          image {
            url
            fluid(maxWidth: 1328) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `,
  )
  return contact
}
