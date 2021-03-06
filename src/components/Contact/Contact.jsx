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
import BackToTop from '../core/BackToTop/BackToTop'

const Contact = ({ id, topic, setTopic, hideBackToTop = false }) => {
  const { contact } = useContact()
  const { services } = useServices()

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
            <Form services={services.edges} contact={contact} topic={topic} setTopic={setTopic} />
          </ContactFormWrapper>
        </Wrapper>
        {!hideBackToTop && <BackToTop />}
      </Container>
    </section>
  )
}

export default Contact
