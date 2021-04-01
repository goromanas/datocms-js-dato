import React from 'react'
import { PageTitle, Image } from './Logo.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useLogo } from '../../graphql/useLogo'

const Logo = () => {
  const { logo } = useLogo()

  const shouldShowImage = () => {
    return logo.image !== null
  }

  const LogoImage = () => {
    if (logo.image === null) return null
    return (
      <Image
        fixed={logo.image.fixed}
        imgStyle={{
          objectFit: 'contain',
          maxHeight: '40px',
        }}
      />
    )
  }

  const LogoText = () => {
    return <PageTitle>{logo.text}</PageTitle>
  }

  return <AnchorLink to="/#page-top">{shouldShowImage() ? <LogoImage /> : <LogoText />}</AnchorLink>
}

export default Logo
