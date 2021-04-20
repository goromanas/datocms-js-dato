import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { PostCardContainer } from './PostCard.style'

const PostCard = ({ post }) => {
  return (
    <PostCardContainer>
      <Link to={`${post.slug}`}>
        <Img fluid={post.coverImage.small} />
        <h2>{post.title}</h2>
      </Link>
      <span>{post.date}</span>
      <div>{post.excerpt}</div>
    </PostCardContainer>
  )
}

export default PostCard
