import React, { useState } from 'react'
import {
  CoachingWrapper,
  Content,
  Title,
  Description,
  Button,
  ExpandableDescription,
} from './Coaching.style'

const Coaching = ({ id, coaching }) => {
  const [expanded, setExpanded] = useState(false)
  const handleExpanded = () => {
    setExpanded((prev) => !prev)
  }
  const expandedTitle = expanded ? 'Rodyti mažiau' : 'Rodyti daugiau'

  return (
    <CoachingWrapper id={id}>
      <Content>
        <Title>{coaching.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: coaching.description }} />
        <ExpandableDescription
          dangerouslySetInnerHTML={{ __html: coaching.expandableDescription }}
          expanded={expanded}
        />
        <Button title={expandedTitle} type="outline" onClick={handleExpanded} />
      </Content>
    </CoachingWrapper>
  )
}

export default Coaching
