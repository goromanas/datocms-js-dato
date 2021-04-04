import React from 'react'
import QuoteIcon from './QuoteIcon'
import { Wrapper, Content, Author } from './SingleTestimonial.style'
import { colors } from '../../../styles/colors'

function SingleTestimonial({ testimonial, active }) {
  const quoteColor = active ? colors.primary : colors.quoteColor
  return (
    <Wrapper active={active}>
      <QuoteIcon color={quoteColor} />
      <Content>{testimonial.content}</Content>
      <Author>{testimonial.author}</Author>
    </Wrapper>
  )
}

export default SingleTestimonial
