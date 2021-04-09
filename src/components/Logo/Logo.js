import React from 'react'
import { PageTitle, Image, StyledDot } from './Logo.style'
import { Link } from 'gatsby'
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

  return <Link to="/">{shouldShowImage() ? <LogoImage /> : <LogoText />}</Link>
}

export default Logo
