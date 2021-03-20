import React from 'react'
import { PageTitle } from './Logo.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Logo = () => {
  return (
    <AnchorLink to="/#page-top">
      <PageTitle>JS</PageTitle>
    </AnchorLink>
  )
}

export default Logo
