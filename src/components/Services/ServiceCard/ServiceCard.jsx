import React from 'react'
import { Card, Title, Price, Description, CTA, PriceContainer } from './ServiceCard.style'
import { addCurrency } from '../../../libs'
import Button from '../../core/Button/Button'
import QuestionMark from './QuestionMark'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const ServiceCard = ({ service, tooltip, setTopic }) => {
  return (
    <Card>
      <Title>{service.title}</Title>
      <PriceContainer>
        <Price>{addCurrency(service.price)}</Price>
        <QuestionMark tooltip={tooltip} />
      </PriceContainer>
      <Description dangerouslySetInnerHTML={{ __html: service.description }} />
      <CTA>
        <AnchorLink to="/#kontaktai" stripHash>
          <Button title="Užsisakyti" color="white" onClick={() => setTopic(service.title)} />
        </AnchorLink>
      </CTA>
    </Card>
  )
}

export default ServiceCard
