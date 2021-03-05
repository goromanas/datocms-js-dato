import React, { useRef } from 'react'
import {
  Wrapper,
  Title,
  SliderContainer,
  Slider,
  Controls,
  IconContainer,
} from './Testimonials.style'
import { useTestimonial } from '../../graphql/useTestimonial'
import SingleTestimonial from './SingleTestimonial/SingleTestimonial'
import ArrowLeft from './Icons/ArrowLeft'
import ArrowRight from './Icons/ArrowRight'

const Testimonials = ({ id }) => {
  const carousel = useRef()
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    swipe: true,
    touchMove: true,
    accessibility: false,
    arrows: false,
    rows: 1,
    speed: 1000,
  }

  const { testimonials } = useTestimonial()

  function handleLeft() {
    carousel.current.prev()
  }

  function handleRight() {
    carousel.current.next()
  }

  const IconLeft = () => (
    <IconContainer onClick={() => handleLeft()}>
      <ArrowLeft />
    </IconContainer>
  )

  const IconRight = () => (
    <IconContainer onClick={() => handleRight()}>
      <ArrowRight />
    </IconContainer>
  )

  return (
    <section id={id}>
      <Title>Atsiliepimai</Title>
      <Wrapper>
        <SliderContainer>
          <Slider {...settings} ref={carousel}>
            {testimonials.edges.map((item) => (
              <SingleTestimonial key={item.node.id} testimonial={item.node} />
            ))}
          </Slider>
        </SliderContainer>
        <Controls>
          <IconLeft />
          <IconRight />
        </Controls>
      </Wrapper>
    </section>
  )
}
export default Testimonials
