import { useStaticQuery, graphql } from 'gatsby'
export const useSeo = () => {
  const seo = useStaticQuery(
    graphql`
      {
        datoCmsSite {
          globalSeo {
            siteName
          }
        }
      }
    `,
  )
  return seo
}
