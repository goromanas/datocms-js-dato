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
