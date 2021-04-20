import React from 'react'
import {
  Card,
  Title,
  Price,
  Description,
  CTA,
  PriceContainer,
  DescriptionContainer,
  CardContent,
  LeftColumn,
  DescriptionWrapper,
} from '../ServiceCard/ServiceCard.style'
import { addCurrency } from '../../../libs'
import Button from '../../core/Button/Button'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StructuredText } from 'react-datocms'

const ServiceCardHorizontal = ({ service }) => {
  console.log(service)
  return (
    <Card horizontal>
      <Title>{service.title}</Title>
      <CardContent>
        <LeftColumn>
          <PriceContainer>
            <Price>{addCurrency(service.price)}</Price>
          </PriceContainer>
          <DescriptionContainer>
            <Description dangerouslySetInnerHTML={{ __html: service.shortdescription }} />
          </DescriptionContainer>
        </LeftColumn>
        <DescriptionWrapper>
          <StructuredText data={service.description} />
        </DescriptionWrapper>
      </CardContent>
      <CTA>
        <AnchorLink to="/#kontaktai" stripHash>
          <Button title="Užsisakyti" color="white" />
        </AnchorLink>
      </CTA>
    </Card>
  )
}

export default ServiceCardHorizontal
