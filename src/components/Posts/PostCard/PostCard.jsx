import React from 'react'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { PostCardContainer } from './PostCard.style'

const PostCard = ({ post }) => {
  return (
    <PostCardContainer>
      <AniLink to={`${post.slug}`} fade>
        <Img fluid={post.coverImage.small} />
        <h2>{post.title}</h2>
      </AniLink>
      <span>{post.date}</span>
      <div>{post.excerpt}</div>
    </PostCardContainer>
  )
}

export default PostCard
