import React from 'react'
import { PageTitle, Image, StyledDot, LogoWrapper } from './Logo.style'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useLogo } from '../../graphql/useLogo'

const Logo = ({ home }) => {
  const { logo } = useLogo()
  const element = '/#page-top'

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
          maxHeight: '50px',
        }}
      />
    )
  }

  const RenderLink = () => (
    <AniLink to="/" fade>
      {shouldShowImage() ? <LogoImage /> : <LogoText />}
    </AniLink>
  )

  const RenderAnchorLink = () => (
    <AnchorLink to={element} stripHash>
      {shouldShowImage() ? <LogoImage /> : <LogoText />}
    </AnchorLink>
  )

  const LogoText = () => {
    if (!logo.text) return
    const [firstTitle, secondTitle] = logo.text.split('.')
    return (
      <PageTitle>
        {firstTitle}
        <StyledDot>.</StyledDot>
        {secondTitle}
      </PageTitle>
    )
  }

  return <LogoWrapper>{home ? <RenderAnchorLink /> : <RenderLink />}</LogoWrapper>
}

export default Logo
