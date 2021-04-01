import { useStaticQuery, graphql } from 'gatsby'
export const useSeo = () => {
  const seo = useStaticQuery(
    graphql`
      query seoQuery {
        site: datoCmsSite {
          faviconMetaTags {
            tags
          }
          globalSeo {
            siteName
          }
        }
      }
    `,
  )
  return seo
}
