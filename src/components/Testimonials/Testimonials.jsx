import React from 'react'
import { Slider, Wrapper, Title } from './Testimonials.style'
import { useTestimonial } from '../../graphql/useTestimonial'
import SingleTestimonial from './SingleTestimonial/SingleTestimonial'
import Container from '../../layouts/Container/Container'

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    swipe: true,
    touchMove: true,
    accessibility: true,
    arrows: false,
  }

  const { testimonials } = useTestimonial()

  return (
    <Container>
      <Title>Atsiliepimai</Title>
      <Wrapper>
        {/* <Slider {...settings}> */}
        {testimonials.edges.map((item) => (
          <SingleTestimonial key={item.node.id} testimonial={item.node} />
        ))}
        {/* </Slider> */}
      </Wrapper>
    </Container>
  )
}
export default Testimonials
