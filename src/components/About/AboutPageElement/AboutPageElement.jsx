import React from 'react'
import { StructuredText } from 'react-datocms'
import {
  AboutWrapper,
  Title,
  Description,
  Image,
  ContentWrapper,
  Row,
  TitleWrapper,
  Container,
  Intro,
  IntroContent,
  Icon,
} from './AboutPageElement.style'
import Img from 'gatsby-image'

const AboutPageElement = ({ id, about }) => {
  console.log(about)
  return (
    <AboutWrapper id={id} dark>
      <Container>
        <TitleWrapper>
          <Title>{about.title}</Title>
        </TitleWrapper>
        <ContentWrapper>
          <Intro>
            <Image
              fixed={about.image.fixed}
              imgStyle={{
                objectFit: 'contain',
              }}
            />
            <IntroContent>
              {about.aboutIntro.map((item) => (
                <Row>
                  <Icon fixed={item.icon.fixed} />
                  <div>{item.line}</div>
                </Row>
              ))}
            </IntroContent>
          </Intro>
        </ContentWrapper>
        <Description>
          <StructuredText
            data={about.description}
            renderBlock={({ record }) => {
              if (record.__typename === 'DatoCmsImageBlock') {
                return <Img fluid={record.image.fluid} />
              }

              return (
                <>
                  <p>Don't know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              )
            }}
          />
        </Description>
      </Container>
    </AboutWrapper>
  )
}

export default AboutPageElement
