import React from 'react'
import { Card, Title, Price, Description, CTA } from './ServiceCard.style'
import { addCurrency } from '../../../libs'
import Button from '../../core/Button/Button'

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <Title>{service.title}</Title>
      <Price>{addCurrency(service.price)}</Price>
      <Description dangerouslySetInnerHTML={{ __html: service.description }} />
      <CTA>
        <Button title="Užsisakyti" color="white" />
      </CTA>
    </Card>
  )
}

export default ServiceCard
