import React from 'react'
import { useAbout } from '../../graphql/useAbout'
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

const About = ({ id }) => {
  const { about } = useAbout()
  return (
    <AboutWrapper id={id}>
      <Container>
        <TitleWrapper>
          <Title>{about.title}</Title>
        </TitleWrapper>
        <ContentWrapper>
          <Image
            fixed={about.image.fixed}
            imgStyle={{
              objectFit: 'contain',
            }}
          />
          <Content>
            <Description dangerouslySetInnerHTML={{ __html: about.description }} />
          </Content>
        </ContentWrapper>
      </Container>
    </AboutWrapper>
  )
}

export default About
