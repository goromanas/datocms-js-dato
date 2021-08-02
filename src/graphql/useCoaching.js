import { useStaticQuery, graphql } from 'gatsby'
export const useCoaching = () => {
  const coaching = useStaticQuery(
    graphql`
      query coachingQuery {
        coaching: datoCmsCoaching {
          title
          seo: seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          content {
            value
            blocks {
              __typename
              ... on DatoCmsImageBlock {
                id: originalId
                image {
                  fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 700) 100vw, 700px") {
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
          }
        }
      }
    `,
  )
  return coaching
}
