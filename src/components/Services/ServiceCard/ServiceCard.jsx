import React from 'react'
import {
  Card,
  Title,
  Price,
  Description,
  CTA,
  PriceContainer,
  AdditionalInfo,
  DescriptionContainer,
} from './ServiceCard.style'
import { addCurrency } from '../../../libs'
import Button from '../../core/Button/Button'
import QuestionMark from './QuestionMark'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import ServiceCardHorizontal from '../ServicePageElement/ServiceCardHorizontal'

const ServiceCard = ({ service, tooltip, setTopic, additionalInfo, horizontal }) => {
  const showAdditionalInfo = additionalInfo !== '' && additionalInfo !== null

  const VerticalLayout = () => (
    <Card>
      <Title>{service.title}</Title>
      <PriceContainer>
        <Price>{addCurrency(service.price)}</Price>
        <QuestionMark tooltip={tooltip} />
      </PriceContainer>
      <DescriptionContainer>
        <Description dangerouslySetInnerHTML={{ __html: service.description }} />
        {showAdditionalInfo && <AdditionalInfo>{additionalInfo}</AdditionalInfo>}
      </DescriptionContainer>
      <CTA>
        <AnchorLink to="/#kontaktai" stripHash>
          <Button title="Užsisakyti" color="white" onClick={() => setTopic(service.title)} />
        </AnchorLink>
      </CTA>
    </Card>
  )

  return (
    <>
      {horizontal ? (
        <ServiceCardHorizontal
          service={service}
          tooltip={tooltip}
          additionalInfo={additionalInfo}
        />
      ) : (
        <VerticalLayout />
      )}
    </>
  )
}

export default ServiceCard
