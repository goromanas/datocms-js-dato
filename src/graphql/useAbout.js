import { useStaticQuery, graphql } from 'gatsby'
export const useAbout = () => {
  const about = useStaticQuery(
    graphql`
      query aboutQuery {
        about: datoCmsAbout {
          title
          aboutIntro {
            line
            icon {
              fixed(width: 30) {
                ...GatsbyDatoCmsFixed
              }
            }
          }
          description {
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

          image {
            fixed(width: 300) {
              ...GatsbyDatoCmsFixed
            }
          }
          seo: seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        }
      }
    `,
  )
  return about
}
