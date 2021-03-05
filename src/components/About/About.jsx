import React from 'react'
import { useAbout } from '../../graphql/useAbout'
import { AboutWrapper, Content, Title, Description } from './About.style'

const About = ({ id }) => {
  const { about } = useAbout()
  return (
    <AboutWrapper id={id}>
      <Content>
        <Title>{about.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: about.description }} />
      </Content>
    </AboutWrapper>
  )
}

export default About
