import React, { useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Wrapper,
  Title,
  SliderContainer,
  Slider,
  Controls,
  IconContainer,
} from './Testimonials.style'
import { useTestimonial } from '../../graphql/useTestimonial'
import SingleTestimonial from './SingleTestimonial/SingleTestimonial'

const Testimonials = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carousel = useRef()
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    accessibility: false,
    arrows: false,
    rows: 1,
    speed: 1000,
    swipeToSlide: true,
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
          <Slider {...settings} ref={carousel} beforeChange={(prev, next) => setCurrentSlide(next)}>
            {testimonials.edges.map((item, index) => (
              <SingleTestimonial
                key={item.node.id}
                testimonial={item.node}
                active={currentSlide === index}
              />
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
