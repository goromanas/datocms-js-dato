import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import SinglePost from '../../components/Posts/SinglePost/SinglePost'

export default function Post({ data: { site, post, morePosts } }) {
  return (
    <>
      <HelmetDatoCms seo={post.seo} favicon={site.favicon} />
      <SinglePost
        content={post.content}
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
      />
    </>
  )
}

export const query = graphql`
  query PostBySlug($id: String) {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    post: datoCmsPost(id: { eq: $id }) {
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
      date
      coverImage {
        fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 1500px) 100vw, 1500px") {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    morePosts: allDatoCmsPost(
      sort: { fields: date, order: DESC }
      limit: 2
      filter: { id: { ne: $id } }
    ) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          small: fluid(
            imgixParams: { fm: "jpg" }
            sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px"
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
