import React from 'react'
import { isMobileDevice } from '../../libs'
import {
  AboutWrapper,
  Title,
  Description,
  Image,
  ContentWrapper,
  Content,
  TitleWrapper,
  Container,
} from './About.style'

const About = ({ id, about }) => {
  return (
    <AboutWrapper id={id}>
      <Container>
        <TitleWrapper>
          <Title>{about.title}</Title>
        </TitleWrapper>
        <ContentWrapper>
          {isMobileDevice() ? (
            <Image
              fixed={about.image.fixed}
              imgStyle={{
                objectFit: 'contain',
              }}
            />
          ) : (
            <Image
              fluid={about.image.fluid}
              imgStyle={{
                objectFit: 'contain',
              }}
            />
          )}

          <Content>
            <Description dangerouslySetInnerHTML={{ __html: about.description }} />
          </Content>
        </ContentWrapper>
      </Container>
    </AboutWrapper>
  )
}

export default About
