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
  RightColumn,
  DescriptionWrapper,
} from '../ServiceCard/ServiceCard.style'
import { addCurrency } from '../../../libs'
import Button from '../../core/Button/Button'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StructuredText } from 'react-datocms'

const ServiceCardHorizontal = ({ service }) => {
  return (
    <Card horizontal>
      <CardContent>
        <LeftColumn>
          <PriceContainer>
            <Price>{addCurrency(service.price)}</Price>
          </PriceContainer>
          <DescriptionContainer>
            <Description dangerouslySetInnerHTML={{ __html: service.shortdescription }} />
          </DescriptionContainer>
        </LeftColumn>
        <RightColumn>
          <Title horizontal>{service.title}</Title>
          <DescriptionWrapper>
            <StructuredText data={service.description} />
          </DescriptionWrapper>
          <CTA>
            <AnchorLink to="/#kontaktai" stripHash>
              <Button title="Užsisakyti" color="white" />
            </AnchorLink>
          </CTA>
        </RightColumn>
      </CardContent>
    </Card>
  )
}

export default ServiceCardHorizontal
