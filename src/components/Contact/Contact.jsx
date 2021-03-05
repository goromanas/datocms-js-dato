import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import { useContact } from '../../graphql/useContact'
import { useServices } from '../../graphql/useServices'
import Container from '../../layouts/Container/Container'
import ArrowTop from './Icons/ArrowTop'
import {
  ContactFormWrapper,
  Image,
  Wrapper,
  Title,
  SocialWrapper,
  ContactItem,
  IconContainer,
  Row,
} from './Contact.style'
import Form from './Form/Form'
import EnvelopeIcon from './Icons/EnvelopeIcon'
import LinkedinIcon from './Icons/LinkedinIcon'
import PhoneIcon from './Icons/PhoneIcon'

const Contact = ({ id }) => {
  const { contact } = useContact()
  const { services } = useServices()

  const BackToTop = () => {
    return (
      <Row>
        <AnchorLink to="/#header">
          <IconContainer>
            <ArrowTop />
          </IconContainer>
        </AnchorLink>
      </Row>
    )
  }

  return (
    <section id={id}>
      <Container>
        <Wrapper>
          <Image fluid={contact.image.fluid} />
          <ContactFormWrapper>
            <Title>{contact.title}</Title>
            <SocialWrapper>
              <ContactItem>
                <PhoneIcon />
                <div>{contact.phone}</div>
              </ContactItem>
              <ContactItem>
                <EnvelopeIcon />
                <div>{contact.email}</div>
              </ContactItem>
              <ContactItem>
                <LinkedinIcon />
                <div>{contact.linkedin}</div>
              </ContactItem>
            </SocialWrapper>
            <Form services={services.edges} contact={contact} />
          </ContactFormWrapper>
        </Wrapper>
        <BackToTop />
      </Container>
    </section>
  )
}

export default Contact
