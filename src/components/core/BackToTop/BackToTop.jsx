import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Row, IconContainer } from './BackToTop.style'
import ArrowTop from './Icons/ArrowTop'

const BackToTop = ({ element = '/#page-top' }) => {
  return (
    <Row>
      <AnchorLink to={element} stripHash>
        <IconContainer>
          <ArrowTop />
        </IconContainer>
      </AnchorLink>
    </Row>
  )
}

export default BackToTop
