import React from 'react'
import { useCoaching } from '../../graphql/useCoaching'
import { CoachingWrapper, Content, Title, Description } from './Coaching.style'

const About = ({ id }) => {
  const { coaching } = useCoaching()
  return (
    <CoachingWrapper id={id}>
      <Content>
        <Title>{coaching.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: coaching.description }} />
      </Content>
    </CoachingWrapper>
  )
}

export default About
