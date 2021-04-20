import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import Container from '../../layouts/Container/Container'
import ServiceCard from './ServiceCard/ServiceCard'
import { CardWrapper, ServiceSection, BackgroundImage, Title } from './Services.style'

const Services = ({ id, setTopic, services, title, background }) => {
  return (
    <ServiceSection id={id}>
      <Parallax className="custom-class" y={[-20, 20]}>
        <BackgroundImage fluid={background.fluid}>
          <Title>{title}</Title>
        </BackgroundImage>
      </Parallax>

      <Container>
        <CardWrapper>
          {services.map((service) => (
            <ServiceCard
              key={service.originalId}
              service={service}
              tooltip={service.tooltip}
              setTopic={setTopic}
              additionalInfo={service.additionalInfo}
            />
          ))}
        </CardWrapper>
      </Container>
    </ServiceSection>
  )
}

export default Services
