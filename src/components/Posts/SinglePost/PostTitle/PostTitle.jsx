import React from 'react'
import Img from 'gatsby-image'
import { Wrapper } from './PostTitle.style'

const PostTitle = ({ title, coverImage, date }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <Img fluid={coverImage.fluid} />
    </Wrapper>
  )
}

export default PostTitle
