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
  SocialLink,
  Email,
} from './Contact.style'

import EnvelopeIcon from './Icons/EnvelopeIcon'
import PhoneIcon from './Icons/PhoneIcon'
import BackToTop from '../core/BackToTop/BackToTop'
import { Parallax } from 'react-scroll-parallax'
import loadable from '@loadable/component'

const Form = loadable(() => import('./Form/Form'))

const Contact = ({ id, topic, setTopic, hideBackToTop = false }) => {
  const { contact } = useContact()
  const { services } = useServices()

  return (
    <section id={id}>
      <Container>
        <Wrapper>
          <Parallax className="custom-class" y={[-20, 20]}>
            <Image fluid={contact.image.fluid} />
          </Parallax>
          <ContactFormWrapper>
            <Title>{contact.title}</Title>
            <SocialWrapper>
              <ContactItem>
                <PhoneIcon />
                <SocialLink>{contact.phone}</SocialLink>
              </ContactItem>
              <ContactItem>
                <EnvelopeIcon />
                <SocialLink>
                  <Email href={`mailto:${contact.email}`}>{contact.email}</Email>
                </SocialLink>
              </ContactItem>
            </SocialWrapper>
            <Form
              services={services.longServiceBlock}
              contact={contact}
              topic={topic}
              setTopic={setTopic}
            />
          </ContactFormWrapper>
        </Wrapper>
        {!hideBackToTop && <BackToTop />}
      </Container>
    </section>
  )
}

export default Contact
