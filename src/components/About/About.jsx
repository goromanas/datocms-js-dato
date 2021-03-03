import React from 'react'
import { useAbout } from '../../graphql/useAbout'
import { AboutWrapper } from './About.style'

const About = () => {
  const data = useAbout()
  console.log(data)
  return (
    <AboutWrapper>
      <h1>{data.datoCmsAbout.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsAbout.description }} />
    </AboutWrapper>
  )
}

export default About
