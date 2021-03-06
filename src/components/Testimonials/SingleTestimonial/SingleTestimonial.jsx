import React from 'react'
import QuoteIcon from './QuoteIcon'
import { Wrapper, Content, Author } from './SingleTestimonial.style'

function SingleTestimonial({ testimonial, active }) {
  return (
    <Wrapper active={active}>
      <QuoteIcon />
      <Content>{testimonial.content}</Content>
      <Author>{testimonial.author}</Author>
    </Wrapper>
  )
}

export default SingleTestimonial
