import { useStaticQuery, graphql } from 'gatsby'

export const usePosts = () => {
  const posts = useStaticQuery(
    graphql`
      query posts {
        posts: allDatoCmsPost {
          edges {
            node {
              seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
              }
              title
              slug
              originalId
              excerpt
              date
              coverImage {
                large: fluid(
                  imgixParams: { fm: "jpg" }
                  sizes: "(max-width: 1500px) 100vw, 1500px"
                ) {
                  ...GatsbyDatoCmsFluid
                }
                small: fluid(
                  imgixParams: { fm: "jpg" }
                  sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px"
                ) {
                  ...GatsbyDatoCmsFluid
                }
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
        }
      }
    `,
  )
  return posts
}
