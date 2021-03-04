import React from 'react'
import { useContact } from '../../graphql/useContact'
import { useServices } from '../../graphql/useServices'
import Container from '../../layouts/Container/Container'
import {
  ContactFormWrapper,
  Image,
  Wrapper,
  Title,
  SocialWrapper,
  ContactItem,
} from './Contact.style'
import Form from './Form/Form'
import EnvelopeIcon from './Icons/EnvelopeIcon'
import LinkedinIcon from './Icons/LinkedinIcon'
import PhoneIcon from './Icons/PhoneIcon'

const Contact = () => {
  const { contact } = useContact()
  const { services } = useServices()

  console.log(contact)

  return (
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
    </Container>
  )
}

export default Contact
