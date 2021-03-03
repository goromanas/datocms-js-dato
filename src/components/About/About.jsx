import React from 'react'
import { useAbout } from '../../graphql/useAbout'
import { AboutWrapper, Content, Title, Description } from './About.style'

const About = () => {
  const data = useAbout()
  return (
    <AboutWrapper>
      <Content>
        <Title>{data.datoCmsAbout.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.description }} />
      </Content>
    </AboutWrapper>
  )
}

export default About
