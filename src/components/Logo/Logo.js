import React from 'react'
import { Link } from 'gatsby'
import { PageTitle } from './Logo.style'

const Logo = () => {
  return (
    <Link to="/">
      <PageTitle>JS</PageTitle>
    </Link>
  )
}

export default Logo
