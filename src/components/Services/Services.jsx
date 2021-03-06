import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useServices } from '../../graphql/useServices'
import Container from '../../layouts/Container/Container'
import ServiceCard from './ServiceCard/ServiceCard'
import { CardWrapper, ServiceSection, BackgroundImage, Title } from './Services.style'

const Services = ({ id, setTopic }) => {
  const { services, section } = useServices()
  const page = section.edges.filter((edge) => edge.node.title === 'Paslaugos')[0]

  return (
    <ServiceSection id={id}>
      <Parallax className="custom-class" y={[-20, 20]}>
        <BackgroundImage fluid={page.node.background.fluid}>
          <Title>{page.node.title}</Title>
        </BackgroundImage>
      </Parallax>

      <Container>
        <CardWrapper>
          {services.edges.map((service) => (
            <ServiceCard
              key={service.node.id}
              service={service.node}
              tooltip={page.node.tooltip}
              setTopic={setTopic}
            />
          ))}
        </CardWrapper>
      </Container>
    </ServiceSection>
  )
}

export default Services
