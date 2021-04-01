import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Wrapper,
  Title,
  SliderContainer,
  Slider,
  Controls,
  LeftIconContainer,
  RightIconContainer,
} from './Testimonials.style'
import { useTestimonial } from '../../graphql/useTestimonial'
import SingleTestimonial from './SingleTestimonial/SingleTestimonial'
import { getTestimonialtemsLength } from '../../libs'

const Testimonials = ({ id }) => {
  const { testimonials } = useTestimonial()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(getTestimonialtemsLength(testimonials.edges))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSlidesToShow(getTestimonialtemsLength(testimonials.edges))
    }
  }, [testimonials.edges])

  const carousel = useRef()

  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: slidesToShow,
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
    centerMode: true,
  }

  function handleLeft() {
    carousel.current.prev()
  }

  function handleRight() {
    carousel.current.next()
  }

  const IconLeft = () => (
    <LeftIconContainer onClick={() => handleLeft()}>
      <ArrowLeft />
    </LeftIconContainer>
  )

  const IconRight = () => (
    <RightIconContainer onClick={() => handleRight()}>
      <ArrowRight />
    </RightIconContainer>
  )

  return (
    <section id={id}>
      <Title>Atsiliepimai</Title>
      <Wrapper>
        <SliderContainer>
          <Slider
            {...settings}
            ref={carousel}
            beforeChange={(prev, next) => setCurrentSlide(next)}
            key={slidesToShow}
          >
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
