import React from 'react'
import { Card, Title, Price, Description, CTA, PriceContainer } from './ServiceCard.style'
import { addCurrency } from '../../../libs'
import Button from '../../core/Button/Button'
import QuestionMark from './QuestionMark'

const ServiceCard = ({ service, tooltip }) => {
  return (
    <Card>
      <Title>{service.title}</Title>
      <PriceContainer>
        <Price>{addCurrency(service.price)}</Price>
        <QuestionMark tooltip={tooltip} />
      </PriceContainer>
      <Description dangerouslySetInnerHTML={{ __html: service.description }} />
      <CTA>
        <Button title="Užsisakyti" color="white" />
      </CTA>
    </Card>
  )
}

export default ServiceCard
