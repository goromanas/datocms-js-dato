import { useStaticQuery, graphql } from 'gatsby'
export const useTestimonial = () => {
  const testimonial = useStaticQuery(
    graphql`
      query testimonialQuery {
        testimonials: allDatoCmsTestimonial {
          edges {
            node {
              author
              id
              content
            }
          }
        }
      }
    `,
  )
  return testimonial
}
