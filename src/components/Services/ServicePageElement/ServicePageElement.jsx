import React from 'react'
import Container from '../../../layouts/Container/Container'
import ServiceCard from '../ServiceCard/ServiceCard'
import { CardWrapperHorizontal, ServiceSection, BackgroundImage, Title } from '../Services.style'

const ServicePageElement = ({ id, services }) => {
  console.log(services)
  return (
    <ServiceSection id={id} horizontal>
      <BackgroundImage fluid={services.backgroundimage.fluid} horizontal>
        <Title>{services.title}</Title>
      </BackgroundImage>

      <Container>
        <CardWrapperHorizontal>
          {services.longServiceBlock.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              tooltip={service.tooltip}
              additionalInfo={service.additionalInfo}
              horizontal
            />
          ))}
        </CardWrapperHorizontal>
      </Container>
    </ServiceSection>
  )
}

export default ServicePageElement
