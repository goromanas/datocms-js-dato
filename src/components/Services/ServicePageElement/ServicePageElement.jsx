import React from 'react'
import Container from '../../../layouts/Container/Container'
import ServiceCard from '../ServiceCard/ServiceCard'
import {
  CardWrapperHorizontal,
  ServiceSection,
  BackgroundImagePage,
  Title,
} from '../Services.style'

const ServicePageElement = ({ id, services }) => {
  return (
    <ServiceSection id={id} horizontal>
      <BackgroundImagePage fluid={services.backgroundimage.fluid} horizontal>
        <Title>{services.title}</Title>
      </BackgroundImagePage>

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
